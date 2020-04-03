import * as $ from 'jquery';

function analytics() {
  let count = 0;
  let destroyed = false;

  const listener = () => count++;

  $(document).on('click', listener);

  return {
    destroy() {
      $(document).off('click', listener);
      destroyed = true;
    },
    getCount() {
      if (destroyed) {
        return `Analytics was destroyed, total count is ${count}`;
      }
      return count;
    }
  };
}

window.analytics = analytics();
