const dragAndDrop = () => {
  const cards = document.querySelectorAll('.todo-card');
  const columns = document.querySelectorAll('.list__column');

  let dragTarget = null;

  const dragStart = function (e) {
    setTimeout(() => {
      dragTarget = this;
      this.classList.add('hide');
    }, 0);
  };

  const dragEnd = function (e) {
    this.classList.remove('hide');
  };

  cards.forEach((card) => {
    card.addEventListener('dragstart', dragStart);
    card.addEventListener('dragend', dragEnd);
  });

  const dragEnter = function (e) {
    e.preventDefault();
    this.classList.add('hovered');
  };

  const dragLeave = function (e) {
    this.classList.remove('hovered');
  };

  const dragOver = function (e) {
    e.preventDefault();
  };

  const dragDrop = function () {
    this.querySelector('.list__column--body').append(dragTarget);
    this.classList.remove('hovered');
  };

  columns.forEach((col) => {
    col.addEventListener('dragenter', dragEnter);
    col.addEventListener('dragleave', dragLeave);
    col.addEventListener('dragover', dragOver);
    col.addEventListener('drop', dragDrop);
  });
};

dragAndDrop();
