//1
// let element = document.getElementById('elem');
// element.classList.add('www');

                                //2
// let element = document.getElementById('elem');
// element.classList.remove('www');

                                //3
// let element = document.getElementById('elem');
// if (element.classList.contains('www'));

                                    //4
// let element = document.getElementById('elem');
// element.classList.toggle('www');

                                    //5
// let element = document.getElementById('elem');
// let numberOfClasses = element.classList.length;
// console.log("Количество классов у элемента:", numberOfClasses);

                                    //6
// let element = document.getElementById('elem');
// let classes = element.classList;
//     classes.forEach((className) => {
//          alert(className);
//      });

                                    //CSS 1
// let element = document.getElementById('elem');
// element.style.cssText = 'color: red; font-size: 30px; border: 1px solid black;';

//Вставка элементов через appendChild 1

// let ol = document.querySelector('ol');
// let newLi = document.createElement('li');
//     newLi.textContent = 'пункт';
//     ol.appendChild(newLi);

                                //2

// let ul = document.querySelector('ul')
// let m = ['1, 2, 4 ,5 , 7']

// arr.forEach((item) => {
//   let newLi = document.createElement('li');
//   newLi.textContent = item;

//   ul.appendChild(newLi);
// });



//  Свойство TagName:
//  1

// var elem = document.getElementById('elem');
// elem.addEventListener('click', function() {
//     alert(elem.tagName.toLowerCase());
// });


// 3
// let elements = document.getElementsByClassName("www");
// for (let i = 0; i < elements.length; i++) {
//   let tagName = elements[i].tagName.toLowerCase();
//   elements[i].innerHTML += tagName;
// }



// Вставка элементов через insertAdjacentHTML:
// 1
// let elem = document.getElementById('elem');
// elem.insertAdjacentHTML('beforebegin', '<span>!!!</span>');


// 2
// let elem = document.getElementById('elem');
// elem.insertAdjacentHTML('afterend', '<span>!!!</span>');


// 3
// let elem = document.getElementById('elem');
// elem.insertAdjacentHTML('afterbegin', '<span>!!!</span>');


// 4
// let elem = document.getElementById('elem');
// elem.insertAdjacentHTML('beforeend', '<span>!!!</span>');



 //Удаление и клонирование 
//  1
// let parent = document.getElementById('parent');
// let child = document.getElementById('child');
// let button = document.getElementById('deleteButton');

// button.addEventListener('click', function() {
//     let childCopy = child.cloneNode(true);
//     parent.removeChild(child);
//     });


                            //2
// let ol = document.querySelector('ol');
// let button = document.getElementById('deleteLastChildButton');
// button.assEventListener('click', function(){
//     let lastChild = ol.lastElementChild;
//     ol.removeChild(lastChild);
// })



                                //3
// let element = document.getElementById('myElement');
// element.addEventListener('click', function() {
//   element.remove();
// });


                                    //4
// let ol = document.querySelector('ol');
// ol.addEventListener('click', function(event) {
//   if(event.target.tagName === 'LI') {
//     event.target.remove();
//   }
// });

                                //5
// const button = document.getElementById('cloneButton');
// const input = document.getElementById('inputToClone');

// button.addEventListener('click', function() {
// const clonedInput = input.cloneNode(true);
// input.parentNode.appendChild(clonedInput); 
// });           




// Потомки:
// 1
// let elem = document.getElementById('elem');
// let firstChild = elem.firstElementChild;
// firstChild.style.color = 'red';


// 2
//  let elem = document.getElementById('elem');
//  let lastChild = elem.lastElementChild;
//  lastChild.style.color = 'red';


// 3
// let elem = document.getElementById('elem');
// let descendants = elem.children;
// for(let i = 0; i < descendants.length; i++) {
//    descendants[i].textContent += '!';
// }




// Соседи:
// 1
// document.getElementById('addTextButton').addEventListener('click', function() {
// let elem = document.getElementById('elem');
// let prevElement = elem.previousElementSibling;
// if (prevElement) {
// prevElement.textContent = prevElement.textContent + '!';
// }
// });


// 2
// document.getElementById('addTextToNextButton').addEventListener('click', function() {
// let elem = document.


//3
// document.addEventListener("DOMContentLoaded", function() {
//     var elem = document.getElementById("elem");
//     var nextNextSibling = elem.nextElementSibling.nextElementSibling;
//     nextNextSibling.textContent += "!";
// });



// Родители:
// 1
// let elem = document.getElementById('elem');
// let parent = elem.parentElement;
// parent.style.color = 'red';


// 2
// let elem = document.getElementById('elem');
// let grandParent = elem.parentElement.parentElement;
// grandParent.style.color = 'red';



//На величину границы 
// 1

// function showBorderThickness() {
//      var elem = document.getElementById('elem');
//      var borderThickness = elem.clientTop;
// alert('Толщина верхней границы: ' + borderThickness + 'px');
//         }
                  

//2

// function showBorderThickness() {
// var elem = document.getElementById('elem');
// var borderThickness = elem.clientLeft;
// alert('Толщина левой границы: ' + borderThickness + 'px');
// }



// На полный размер элемента:
// 1
// function showWidth() {
//     let elem = document.getElementById('elem');
//     let fullWidth = elem.offsetWidth;
//     alert("Полная ширина с учетом границы и padding: " + fullWidth + "px");
// }
 

// 2
// function showHeight() {
//     let elem = document.getElementById('elem');
//     let fullHeight = elem.offsetHeight;
//     alert("Полная высота с учетом границы и padding: " + fullHeight + "px");
// }
  


//На размер элемента без границ, но с padding:
//1
// function showBorderThickness() {
//     var elem = document.getElementById('elem');
//     var borderThickness = elem.clientWidth;
// alert('Ширина: ' + borderThickness + 'px');
//         }


//2

// function showBorderThickness() {
//     var elem = document.getElementById('elem');
//     var borderThickness = elem.clientHeight;
// alert('Длина: ' + borderThickness + 'px');
//         }



// Работа с getComputedStyle:
// 1
// function showDimensions() {
//     let elem = document.getElementById('elem');
//     let styles = window.getComputedStyle(elem);
//     let width = parseInt(styles.width);
//     let height = parseInt(styles.height);
//     alert("Ширина: " + width + "px, Высота: " + height + "px");
// }
  


// Прокрутка элемента:
// 1
// function showRealHeight() {
//     let elem = document.getElementById('elem');
//     let realHeight = elem.scrollHeight;
//     alert("Реальная высота с учетом прокрутки: " + realHeight + "px");
// }
  

// 2
// function showRealWidth() {
//     let elem = document.getElementById('elem');
//     let realWidth = elem.scrollWidth;
//     alert("Реальная ширина с учетом прокрутки: " + realWidth + "px");
// }
  

// 3
// function scrollToPosition() {
//     let elem = document.getElementById('elem');
//     elem.scrollTop = elem.scrollHeight - elem.clientHeight - 100;
// }
  
  
//Прокрутка элемента 
//1
//     function showScrollTop() {
//         var elem = document.getElementById('elem');
//         var scrollTop = elem.scrollTop;
//         alert('Прокрутка сверху: ' + scrollTop + 'px');
//     }
                                       

//2

// function showScrollLeft() {
// var elem = document.getElementById('elem');
// var scrollLeft = elem.scrollLeft;
// alert('Прокрутка слева: ' + scrollLeft + 'px');
// }


//3

// function scrollToPosition() {
//     var elem = document.getElementById('elem');
//     elem.scrollTop = 100;
// }


//4
// function scrollDown() {
// var elem = document.getElementById('elem');
// elem.scrollTop += 100;
// }

// Прокрутка страницы:
// 1
// function scrollToPosition() {
//     window.scrollTo(300, 500);
// }
  

// 2
// function scrollDown() {
//     window.scrollBy(0, 300);
// }
  


 //практика 
//1
// function scrollToBottom() {
//         window.scrollTo({
//         top: document.body.scrollHeight,
//         behavior: 'smooth'
//     });
// }


//2
// function scrollBy400() {
//     window.scrollBy({
//         top: 0,
//         left: 400,
//         behavior: 'smooth'
//     });
// }


//3
// document.querySelector('button').addEventListener('click', function() {
//     if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
//         window.scrollTo({ top: 100, behavior: 'smooth' });
//     }
//     });

                                            //4
// document.getElementById('elem').addEventListener('click', function() {
//     var elem = document.getElementById('elem');
//     var currentWidth = elem.offsetWidth;
//     var currentHeight = elem.offsetHeight;
//     elem.style.width = (currentWidth * 2) + 'px';
//     elem.style.height = (currentHeight * 2) + 'px';
//     });