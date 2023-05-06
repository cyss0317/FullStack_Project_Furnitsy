export function useCSS() {
  const removeEnlargeEffect = (e) => {
    const img = e.target;
    const salesInfo = img.nextElementSibling;
    img.classList.toggle("hover-enlarge");
    salesInfo.classList.toggle("hover-enlarge");
  };

  const applyEnlargeEffect = (e) => {
    const img = e.target;
    const salesInfo = img.nextElementSibling;
    img.classList.toggle("hover-enlarge");
    salesInfo.classList.toggle("hover-enlarge");
  };
  return {
    removeEnlargeEffect,
    applyEnlargeEffect,
  };
}
