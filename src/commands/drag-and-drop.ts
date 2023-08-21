/**
 * Drag and drop an element in another one.
 *
 * @example `cy.getByTestAttr('draggable').dragAndDrop(cy.getByTestAttr('droppable'))`
 */
Cypress.Commands.add('dragAndDrop', { prevSubject: 'element' }, (draggable, droppable) => {
  let dropCoords: DOMRect;
  let dragToX: number;
  let dragToY: number;

  return droppable
    .then(([drop]) => {
      dropCoords = drop.getBoundingClientRect();

      return cy.window();
    })
    .then((window) => {
      /*
       The values in getBoundingClientRect() are relative to the viewport, as are clientX and clientY on a caught
       MouseEvent. However, it seems that when initializing a MouseEvent, the values are relative to the window.
       Thus, if the window is scrolled, we have to account for this when calculating the coordinates to drag to.
       */
      dragToX = (dropCoords.left + dropCoords.right) / 2 + window.scrollX;
      dragToY = (dropCoords.top + dropCoords.bottom) / 2 + window.scrollY;

      return cy.wrap(draggable);
    })
    .then(([draggable]) => {
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
    });
});

export {};
