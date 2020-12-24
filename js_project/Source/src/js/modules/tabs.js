const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') => {
    const header = document.querySelector(headerSelector),
            tab  =  document.querySelectorAll(tabSelector),
            conent = document.querySelectorAll(contentSelector);

    function hideTabContent() {
        conent.forEach(item => {
            item.style.display = 'none'
        });

        tab.forEach(item => {
            item.classList.remove(activeClass);
        })
    }        

    function showTabConent(i = 0) {
        conent[i].style.display = display;
        tab[i].classList.remove(activeClass);
    }

    hideTabContent();
    showTabConent();

    header.addEventListener('click', (e) => {
        const target = e.target;
        if(target &&
            (target.classList.contains(tabSelector.replace(/\./, "")) ||
        target.parentNode.classList.contains(tabSelector.replace(/\./, "")))){
            tab.forEach((item, i ) => {
                if(target == item || target.parentNode == item){
                    hideTabContent();
                    showTabConent(i);
                } 
            })
        }
    })
}

export default tabs;