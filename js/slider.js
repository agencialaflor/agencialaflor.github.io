document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll("ul.brands").forEach(function (node) {
        var childrenCount = node.children.length;
        for (var i = 0; i < childrenCount; i++) {
            var child = node.children[i];
            var clone = child.cloneNode(true);
            clone.className += "clone";
            node.appendChild(clone);
        }
    });
    
});