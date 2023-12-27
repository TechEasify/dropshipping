import { combineReducers } from 'redux';
import {
  FrontReducer as ProductTemplateFront,
  BackReducer as ProductTemplateBack,
} from './ProductTemplate/reducer';
import Orders from './Orders/reducer';

export default combineReducers({
  ProductTemplateFront,
  ProductTemplateBack,
  Orders,
});
