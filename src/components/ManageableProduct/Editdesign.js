import React, { useRef, useEffect, useState } from 'react';
import { fabric } from 'fabric';
import * as _ from 'lodash';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import shortId from 'shortid';

import { DialogActions } from '@mui/material';

import { clipByName } from '../../modules/ProductTemplate/utils';

import ListLayer from '../../modules/ProductTemplate/containers/ListLayer';
import TabProduct from '../../modules/ProductTemplate/containers/Tab.Product';
import TabDesign from '../../modules/ProductTemplate/containers/Tab.Design';

import data from '../../modules/ProductTemplate/assets';

import { ResetDesign } from '../../modules/ProductTemplate/action';
import { useCanvas } from '../../modules/ProductTemplate/hooks';

const labelName = {
    front: 'Main',
    back: 'Label',
};

function Editdesign() {
    const location = useLocation();

    const templateImage = "https://shopifyapp.iihtsrt.com/public/assets/uploads/collection/lavender.-without-logo.png";
    const backTemplateImage = "https://shopifyapp.iihtsrt.com/public/assets/uploads/collection/lavender.-without-logo.png";

    const history = useHistory();
    const dispatch = useDispatch();

    const canvasSize = useRef(null);
    const canvasZone = useRef(null);
    const canvas = useCanvas(canvasSize, canvasZone);

    const clipRectangle = useRef(null);
    const dropImageRef = useRef(null);

    const [isReady, setIsReady] = useState(false);
    const [isCapture, setIsCapture] = useState(false);
    const [tab, setTab] = useState('product');
    const [objects, setObjects] = useState({
        front: [],
        back: [],
        left: [],
        right: [],
        in: [],
        out: [],
    });
    const [colors, setColors] = useState({ hexs: [], previews: [] });
    const [color, setColor] = useState('');
    const [template, setTemplate] = useState('front');

    const TEMPLATE_OPTIONS = ['front', 'back'];

    const changeTemplate = (newTemplate) => {
        if (TEMPLATE_OPTIONS.includes(newTemplate)) {
            setTemplate(newTemplate);
        } else {
            console.error('Invalid template option');
        }
    };

    const radius = 300;
    useEffect(() => {
        if (canvas) {
            const canvasWidth = canvas.width;
            const canvasHeight = canvas.height;
    
            // Calculate dynamic position and size for clipRectangle
            const clipWidth = Math.round(canvasWidth / 2);
            const clipHeight = canvasHeight * 0.15;
            const clipLeft = canvasWidth * 0.5 - clipWidth * 0.5;
            const clipTop = canvasHeight * 0.5 - clipHeight * 0.5;
    
            clipRectangle.current = new fabric.Rect({
                width: clipWidth,
                height: clipHeight,
                top: clipTop,
                left: clipLeft,
                fill: 'transparent',
                strokeDashArray: [5, 5],
                stroke: '#222',
                selectable: false, // Make not selectable
                name: 'clip',
                visible: true,
                strokeWidth: 4,
            });
    
            fabric.Image.fromURL(
                template === 'front' ? templateImage : backTemplateImage,
                (iomg) => {
                    canvas.setBackgroundImage(
                        iomg,
                        canvas.renderAll.bind(canvas),
                        {
                            scaleX: canvasWidth / iomg.width,
                            scaleY: canvasHeight / iomg.height,
                        }
                    );
                },
                { selectable: false, name: 'bg', width: canvasWidth, crossOrigin: 'Anonymous' }
            );
    
            fabric.Image.fromURL(
                data.drop,
                (dropImage) => {
                    switch (template) {
                        case 'front':
                            dropImage.set({
                                strokeDashArray: [5, 5],
                                stroke: '#222',
                                top: clipTop,
                                left: clipLeft,
                                width: clipWidth,
                                height: clipHeight,
                                angle: -15,
                                clipPath: new fabric.Rect({
                                    radius: radius,
                                    originX: 'center',
                                    originY: 'center',
                                    angle: -15,
                                }),
                                fill: 'yellow',
                            });
                            break;
                        case 'back':
                            // Adjust for back template if needed
                            break;
                        default:
                    }
    
                    canvas.add(clipRectangle.current);
                    canvas.add(dropImage);
                    dropImageRef.current = dropImage;
                    setIsReady(true);
    
                    // Adjust clipRectangle size and position according to dropImage
                    clipRectangle.current.set({
                        width: dropImage.width,
                        height: dropImage.height,
                        left: dropImage.left,
                        top: dropImage.top,
                    });
                    canvas.renderAll();
                },
                {
                    selectable: false,
                    name: 'drop',
                    crossOrigin: 'Anonymous',
                    selectable: true,
                },
            );
        }
    
        return () => {
            if (canvas) {
                canvas.clear();
            }
            setIsReady(false);
            setObjects((preObjects) => ({
                ...preObjects,
                [template]: preObjects[template].map((object) => {
                    delete object.isRender;
                    return object;
                }),
            }));
        };
    }, [canvas, templateImage, template]);

    const updateDropImage = () => {
        const modifiedObject = clipRectangle.current;
        if (modifiedObject && modifiedObject.name === "clip") {
            const { left, top, width, height } = modifiedObject;
            const dropImage = dropImageRef.current;
            console.log(dropImage, "dropImage");
            if (dropImage) {
                dropImage.set({
                    left: Math.round(left),
                    top: Math.round(top),
                    width: Math.round(width),
                    height: Math.round(height)
                });
            }
            canvas.renderAll();
        }
    };

    useEffect(() => {
        if (canvas) {
            updateDropImage();
            canvas.on('object:modified', updateDropImage);
        }

        return () => {
            if (canvas) {
                canvas.off('object:modified', updateDropImage);
            }
        };
    }, [canvas, clipRectangle.current]);

    const onContinueButtonClick = () => {
        // Other actions to continue
        const cloneCanvas = _.cloneDeep(canvas);
        const cObjects = cloneCanvas.getObjects();
        const [clipPath] = cObjects.filter((object) => object.name === 'clip');
        clipPath.set({ visible: false });
        const imagePreview = cloneCanvas.toDataURL();

        console.log(imagePreview, "imagePreview");
        console.log(objects, "objects");
    };

    useEffect(() => {
        if (colors.hexs.length > 0 && isReady) {
            const cloneCanvas = _.cloneDeep(canvas);
            const clipPath = _.find(
                cloneCanvas.getObjects(),
                (o) => o.name === 'clip'
            );
            const dropImage = _.find(
                cloneCanvas.getObjects(),
                (o) => o.name === 'drop'
            );
            cloneCanvas.remove(clipPath);
            cloneCanvas.remove(dropImage);
            const previews = colors.hexs.map((c) => {
                cloneCanvas.set({ backgroundColor: c });
                return {
                    image: cloneCanvas.toDataURL(),
                    color: c,
                };
            });

            canvas.set({ backgroundColor: color });
            canvas.renderAll();

            setColors((prevColors) => ({ ...prevColors, previews }));
        }
    }, [isReady, canvas, color, template, isCapture]);

    useEffect(() => {
        if (canvas && isReady && !_.isEmpty(canvas.getObjects())) {
            const clipPath = _.find(canvas.getObjects(), (o) => o.name === 'clip');
            const dropImage = _.find(canvas.getObjects(), (o) => o.name === 'drop');
            if (canvas.getObjects().length > 2) {
                clipPath.set({ visible: true });
                dropImage.set({ visible: false });
            } else {
                clipPath.set({ visible: false });
                dropImage.set({ visible: true });
            }
            canvas.renderAll();
        }
    });

    useEffect(() => {
        if (objects[template].length > 0 && isReady) {
            objects[template].forEach((object) => {
                if (!object.isRender) {
                    object.set({ isRender: true });
                    if (!object.isOld) {
                        canvas.centerObjectH(object);
                    }
                    canvas.add(object).setActiveObject(object);
                }
            });
        }
        setIsCapture((preCapture) => !preCapture);
    }, [objects, isReady]);

    const onModifyObjects = (newObjects) => {
        objects[template].forEach((object) => {
            canvas.remove(object);
        });

        setObjects({
            ...objects,
            [template]: !_.isEmpty(newObjects)
                ? newObjects.map((obj) => {
                    delete obj.isRender;
                    return obj;
                })
                : [],
        });
    };

    const onChooseImage = (file) => {
        const clipPath = _.find(canvas.getObjects(), (o) => o.name === 'clip');

        const reader = new FileReader();

        reader.onload = () => {
            fabric.Image.fromURL(
                reader.result,
                (iomg) => {
                    iomg.set({
                        clipTo(ctx) {
                            return _.bind(clipByName, iomg)(ctx, clipPath);
                        },
                    });
                    iomg.scaleToWidth(clipPath.width);

                    iomg.on('mousemove', () => {
                        iomg.set({ isOld: true });
                    });

                    iomg.on('mouseup', () => {
                        setIsCapture((preCapture) => !preCapture);
                    });

                    setObjects({ ...objects, [template]: [...objects[template], iomg] });
                },
                {
                    name: shortId.generate(),
                    top: clipPath.top,
                    left: clipPath.left,
                    crossOrigin: 'anonymous',
                }
            );
        };

        reader.readAsDataURL(file);
    };

    const onSaveTextObject = (textId) => {
        const textObject = _.find(canvas.getObjects(), (o) => o.name === textId);
        canvas.remove(textObject);

        textObject.on('mousemove', () => {
            textObject.set({ isOld: true });
        });

        textObject.on('mouseup', () => {
            setIsCapture((preCapture) => !preCapture);
        });

        textObject.cloneAsImage((image) => {
            textObject.set({ image });

            setObjects({
                ...objects,
                [template]: [...objects[template], textObject],
            });
        });
    };

    const onChangeDesignTemplate = (design) => {
        changeTemplate(design);

        if (objects[template].length > 0) {
            onSaveDesign(templateImage, canvas);
        }
        history.push(`/manageable/editproduct?step=2&design=${design}&type=oil`);
    };

    const onBack = () => {
        dispatch(ResetDesign());
        history.push('/manageable/editproduct');
    };

    const onChooseColor = (chooseColors, currentColor) => {
        // Define your logic for choosing colors here
        console.log("Chosen colors:", chooseColors);
        console.log("Current color:", currentColor);
        // Update state or perform other actions as needed
    };
    return (
        <>
            <div
                className="product-push pf-mb-48  dropzone dropzone-1"
                id="js--product-push-designer"
            >
                <div className="row">
                    <div className="col-12 col-md-4 pf-mt-md-8 pf-mb-md-48">
                        <div>
                            <ul
                                className="pf-tabs primary top-icons tabs-justify pf-mb-md-24 pf-tabs-generator-mobile"
                                style={{ top: 0 }}
                            >
                                <div className="tab-wrap">
                                    <li
                                        className={clsx('tab', tab === 'product' ? 'active' : '')}
                                        onClick={() => setTab('product')}
                                    >
                                        <a href="#">
                                            <span>
                                                <i className="pf-i pf-i-variable pf-i-24" />
                                            </span>
                                            <span>Product</span>
                                        </a>
                                    </li>
                                    <li
                                        className={clsx('tab', tab === 'design' ? 'active' : '')}
                                        onClick={() => setTab('design')}
                                    >
                                        <a href="#">
                                            <span>
                                                <i className="pf-i pf-i-palette-outline pf-i-24" />
                                            </span>
                                            <span>Design</span>
                                        </a>
                                    </li>
                                </div>
                            </ul>
                        </div>
                        <TabProduct
                            onChooseColor={onChooseColor}
                            visible={tab === 'product' ? 'block' : 'none'}
                        />
                        <TabDesign
                            canvas={canvas}
                            onChooseImage={onChooseImage}
                            onSaveTextObject={onSaveTextObject}
                            visible={tab === 'design' ? 'block' : 'none'}
                        />
                    </div>
                    <div
                        className="col-12 col-md-8 pr-0"
                        style={{ padding: 0, height: 1080 }}
                        ref={canvasSize}
                    >
                        <div className="text-center">
                            <ul className="pf-tabs secondary " style={{ top: 0 }}>
                                <div className="tab-wrap">
                                    {Object.keys(objects).map((key) => (
                                        <li
                                            key={key}
                                            className={clsx('tab', template === key ? 'active' : '')}
                                        >
                                            <a href="#" onClick={() => onChangeDesignTemplate(key)}>
                                                <span>{labelName[key]}</span>
                                            </a>
                                        </li>
                                    ))}
                                </div>
                                <span className="nav-arrow left hidden">
                                    <i className="pf-i pf-i-chevron-left pf-i-24" />
                                </span>
                                <span className="nav-arrow right hidden">
                                    <i className="pf-i pf-i-chevron-right pf-i-24" />
                                </span>
                            </ul>
                        </div>

                        <canvas id="c" ref={canvasZone} />
                    </div>
                </div>
            </div>

            <DialogActions
                style={{ position: 'sticky', bottom: 0, backgroundColor: 'white' }}
            >
                <div className="dynamic-sticky-footer  pf-p-0 pf-py-md-16">
                    <div className="dynamic-sticky-footer__second-wrap">
                        <div className="dynamic-sticky-footer__second">
                            <div className="container">
                                <div>
                                    <div className="row no-gutters pf-px-12 pf-px-md-0 pf-pt-8 pf-pt-md-0">
                                        <div className="col-12 col-md-auto order-2 order-md-1 pf-d-flex pf-align-items-stretch">
                                            <a
                                                href="#"
                                                className="pf-btn pf-btn-secondary pf-mr-12 pf-w-25 pf-w-md-auto"
                                                onClick={onBack}
                                            >
                                                Back
                                            </a>

                                            <a
                                                href="#"
                                                className="pf-btn pf-btn-primary pf-w-75 pf-w-md-auto"
                                                onClick={onContinueButtonClick}
                                            >
                                                Continue
                                                <span className="pf-i pf-i-chevron-right pf-i-16 pf-pl-8" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </DialogActions>
        </>
    );
}

export default function WrappedEditDesign() {
    return (
        <DndProvider backend={HTML5Backend}>
            <Editdesign />
        </DndProvider>
    );
}
