/* --------------------------------------------------
     * triple widget
     * --------------------------------------------------*/
document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".triple-widget-container");
    if (container) {
        const widgets = container.querySelectorAll(".custom-widget");
        widgets.forEach(widget => (widget.style.height = "auto"));
        let maxHeight = Math.max(...Array.from(widgets).map(widget => widget.offsetHeight));
        widgets.forEach(widget => (widget.style.height = `${maxHeight}px`));
    }
});