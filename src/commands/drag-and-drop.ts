import { testAttr } from './shared';

Cypress.Commands.add('dragAndDrop', { prevSubject: 'element' }, (drag, drop, index = 0) => {
  const droppable = Cypress.$(testAttr(drop))[index];
  const coords = droppable.getBoundingClientRect();
  let dragToX: number;
  let dragToY: number;

  return cy
    .window()
    .then((w) => {
      /*
       The values in getBoundingClientRect() are relative to the viewport, as are clientX and clientY on a caught
       MouseEvent. However, it seems that when initializing a MouseEvent, the values are relative to the window.
       Thus, if the window is scrolled, we have to account for this when calculating the coordinates to drag to.
       */
      dragToX = (coords.left + coords.right) / 2 + w.scrollX;
      dragToY = (coords.top + coords.bottom) / 2 + w.scrollY;
    })
    .then(() =>
      cy.wrap(drag).then(([draggable]) => {
        draggable.dispatchEvent(new MouseEvent('mousedown', { buttons: 1, bubbles: true }));
        draggable.dispatchEvent(
          new MouseEvent('mousemove', {
            clientX: 0,
            clientY: 10,
            bubbles: true,
          }),
        );

        draggable.dispatchEvent(
          new MouseEvent('mousemove', {
            buttons: 1,
            bubbles: true,
            clientX: dragToX,
            clientY: dragToY,
          }),
        );
        draggable.dispatchEvent(new MouseEvent('mouseup'));
      }),
    );
});
