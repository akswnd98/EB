import EBElement, { ConstructorParam as ParentConstructorParam } from '@/src/EBElement';
import 'reflect-metadata';
import { injectable } from 'inversify';
import PopupInterface from '..';

export type ConstructorParam = {
  showTimeClasses: string[];
  hideTimeClasses: string[];
} & ParentConstructorParam;

@injectable()
export default class CssClass extends PopupInterface {
  showTimeClasses: string[];
  hideTimeClasses: string[];

  constructor (payload: ConstructorParam) {
    super();
    this.showTimeClasses = payload.showTimeClasses;
    this.hideTimeClasses = payload.hideTimeClasses;
  }

  show (element: EBElement) {
    this.showTimeClasses.forEach((v) => {
      element.rootElement.classList.add(v);
    });
    this.hideTimeClasses.forEach((v) => {
      element.rootElement.classList.remove(v);
    });
  }

  hide (element: EBElement) {
    this.hideTimeClasses.forEach((v) => {
      element.rootElement.classList.add(v);
    });
    this.showTimeClasses.forEach((v) => {
      element.rootElement.classList.remove(v);
    });
  }
}
