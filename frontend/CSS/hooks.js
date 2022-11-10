export function useCSS() {
  const removeEnlargeEffect = (e) => {
    const img = e.target;
    const salesInfo = img.nextElementSibling;
    console.log(salesInfo);
    img.className = e.target.className.replace(" hover-enlarge", "");
    salesInfo.className = salesInfo.className.replace(" hover-enlarge", "");
  };

  const applyEnlargeEffect = (e) => {
    const img = e.target;
    const salesInfo = img.nextElementSibling;
    img.className += " hover-enlarge";
    salesInfo.className += " hover-enlarge";
  };
  return {
    removeEnlargeEffect,
    applyEnlargeEffect,
  };
}

// export default useCSS;
