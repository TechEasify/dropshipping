import React, { useRef, useEffect, useState } from 'react';
import { fabric } from 'fabric';
import * as _ from 'lodash';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import shortId from 'shortid';

import { DialogActions } from '@mui/material';

import { useCanvas } from '../hooks';

import { clipByName } from '../utils';

import ListLayer from './ListLayer';
import TabProduct from './Tab.Product';
import TabDesign from './Tab.Design';

import data from '../assets';

import { ResetDesign } from '../action';

const labelName = {
  front: 'Main',
  back: 'Label',
};

export default function Design({ template, type, onReview, onSaveDesign }) {
  const templateImage = "https://shopifyapp.iihtsrt.com/public/assets/uploads/collection/lavender.-without-logo.png";//data[type][template];

  const history = useHistory();
  const dispatch = useDispatch();

  const canvasSize = useRef(null);
  const canvasZone = useRef(null);

  const canvas = useCanvas(canvasSize, canvasZone);

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

  useEffect(() => {
    if (canvas) {
      const clipRectangle = new fabric.Rect({
        originX: 'left',
        originY: 'top',
        fill: 'transparent',
        strokeDashArray: [5, 5],
        stroke: '#222',
        selectable: true,
        name: 'clip',
        visible: true,
      });

      fabric.Image.fromURL(
        templateImage,
        (iomg) => {
          fabric.Image.fromURL(
            'https://static.cdn.printful.com/static/v767/generator/drop-your-design-here.svg',
            (dropImage) => {
              clipRectangle.set({ top: iomg.height / 2 });

              canvas.centerObjectH(iomg);
              canvas.add(iomg);

              switch (template) {
                case 'front':
                case 'back':
                  clipRectangle.set({
                    left: iomg.width / 4.5,
                    top: iomg.height / 2,
                    width: iomg.width / 2,
                    height: iomg.height / 5,
                  });
                  dropImage.set({
                    left: iomg.width /2.8,
                    top: iomg.height / 2,
                    width: iomg.width / 2,
                    height: iomg.height / 2,
                  });
                  break;
                // case 'left':
                //   clipRectangle.set({
                //     left: iomg.width / 2,
                //     top: iomg.height / 3,
                //     width: iomg.width / 3,
                //     height: iomg.height / 3,
                //   });
                //   dropImage.set({
                //     left: iomg.width / 2,
                //     top: iomg.height / 3,
                //     width: iomg.width / 3,
                //     height: iomg.height / 3,
                //   });
                //   break;
                // case 'right':
                //   clipRectangle.set({
                //     left: iomg.width / 4,
                //     top: iomg.height / 3,
                //     width: iomg.width / 3,
                //     height: iomg.height / 3,
                //   });
                //   dropImage.set({
                //     left: iomg.width / 4,
                //     top: iomg.height / 3,
                //     width: iomg.width / 3,
                //     height: iomg.height / 3,
                //   });
                //   break;
                // case 'in':
                //   clipRectangle.set({
                //     height: iomg.height / 5,
                //     width: iomg.width / 2,
                //     top: iomg.height / 3,
                //     left: iomg.width / 4,
                //   });
                //   dropImage.set({
                //     height: iomg.height / 5,
                //     width: iomg.width / 2,
                //     top: iomg.height / 3,
                //     left: iomg.width / 4,
                //   });
                //   break;
                // case 'out':
                //   clipRectangle.set({
                //     height: iomg.height / 2,
                //     width: iomg.width / 2,
                //     top: iomg.height / 3,
                //     left: iomg.width / 4,
                //   });
                //   dropImage.set({
                //     height: iomg.height / 2,
                //     width: iomg.width / 2,
                //     top: iomg.height / 3,
                //     left: iomg.width / 4,
                //   });
                //   break;
                default:
              }

              canvas.add(clipRectangle);
              canvas.add(dropImage);

              setIsReady(true);
            },
            {
              top: iomg.height / 2,
              name: 'drop',
              crossOrigin: 'Anonymous',
              selectable: false
            },
          );
        },
        { selectable: false, name: 'bg', width: canvas.width,crossOrigin: 'Anonymous' }
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

  const onChooseColor = (chooseColors, currentColor) => {
    setColors({ ...colors, hexs: chooseColors });
    setColor(currentColor);
  };

  useEffect(() => {
    if (canvas && isReady && !_.isEmpty(canvas.getObjects())) {
      const clipPath = _.find(canvas.getObjects(), (o) => o.name === 'clip');
      const dropImage = _.find(canvas.getObjects(), (o) => o.name === 'drop');
      if (canvas.getObjects().length > 3) {
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
          top: (clipPath.top + clipPath.height) / 2,
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

  const onChangeDesignTemplate = (desgin) => {
    if (objects[template].length > 0) {
      onSaveDesign(template, canvas);
    }
    history.push(`/template/create?step=2&design=${desgin}&type=${type}`);
  };

  const onBack = () => {
    dispatch(ResetDesign());
    history.push('/template/create?step=1');
  };

  return (
    <>
      <div
        className="product-push pf-mb-48   dropzone dropzone-1"
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
            <div className="pf-position-relative">
              <h6 className="pf-border-top pf-h6 pf-mt-24 pf-mb-12 pf-pt-12">
                Layers:
              </h6>
            </div>
            <div />
            <DndProvider backend={HTML5Backend}>
              <ListLayer
                objects={objects[template]}
                canvas={canvas}
                onModifyObjects={onModifyObjects}
              />
            </DndProvider>
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
            <div className="pf-mb-8" />
            <div className="generator-variant-area">
              {colors.previews.map((preview) => (
                <div
                  className="variant-item active"
                  title=""
                  role="button"
                  onClick={() => setColor(preview.color)}
                  key={preview.color}
                >
                  <div className="quality-icon" />
                  <div
                    className="generator-mockup-preview pf-mx-auto"
                    style={{ minHeight: 100, width: 100 }}
                  >
                    <div
                      style={{ backgroundImage: `url("${preview.image}")` }}
                    />
                    <div />
                  </div>
                  <div />
                </div>
              ))}
            </div>
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
                        onClick={() => {
                         
                            // console.log(fabric.util.toDataURL(canvas, 'png'));
                            onSaveDesign(templateImage, canvas);
                            // console.log('x')
                          
                          // if (objects[template].length > 0) {
                          //   onSaveDesign(templateImage, canvas);
                          //   console.log('x')
                          // }
                          // onReview(objects, colors.hexs);
                        }}
                      >
                        Continue
                        <span className="pf-i pf-i-loading pf-i-spin pf-i-24 pf-d-none  pf-ml-4" />
                      </a>
                    </div>
                    <div className="col-12 col-md-auto order-3 order-md-2">
                      <div className="pf-text-red pf-bold pf-pb-8 pf-pb-md-0 pf-px-8" />
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
