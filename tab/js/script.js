window.addEventListener('DOMContentLoaded', function(){
  'use strict';
  
  class HideShowTab {
    
  /**
   * 
   * @param {string} infoHeader - css родителя вкладок;
   * @param {string} infoHeaderTab - css вкладок;
   * @param {string} infoTabcontent - css контента вкладок;
   * @param {string} showCSS - css для показа элемента;
   * @param {string} hideCSS - css для скрытия элемента;
   * @param {string} event - событие ('click', 'mouseover' и т.п.);
   */
    constructor(infoHeader, infoHeaderTab, infoTabcontent, showCSS, hideCSS){
      this.info = document.querySelector('.' + infoHeader);
      this.tab = document.querySelectorAll('.' + infoHeaderTab);
      this.tabContent = document.querySelectorAll('.' + infoTabcontent);
      this.showCSS = showCSS;
      this.hideCSS = hideCSS;
      this.info.onclick = this.clickTab.bind(this);
    }
    
    /**
     * 
     * @param {number} a - 0 или 1 (0 - скрыть все, 1 - показать первый таб)
     */
    hideTabContent(a){
      for(let i = a; i < this.tabContent.length; i++){
        this.tabContent[i].classList.remove(this.showCSS);
        this.tabContent[i].classList.add(this.hideCSS);
      }
    }
    
    /**
     * 
     * @param {number} b - элемент, который нужно показать при клике
     */
    showTabContent(b){
      if(this.tabContent[b].classList.contains(this.hideCSS)){
        this.tabContent[b].classList.remove(this.hideCSS);
        this.tabContent[b].classList.add(this.showCSS);
      }
    }

    clickTab(){
      let target = event.target;
      for(let i = 0; i < this.tab.length; i++){
        if(target == this.tab[i]){
          this.hideTabContent(0);
          this.showTabContent(i);
          break;
        }
      }
    } 
  }
  let tab = new HideShowTab('info', 'info-header-tab', 'info-tabcontent', 'show', 'hide');
      tab.hideTabContent(1);
  
});