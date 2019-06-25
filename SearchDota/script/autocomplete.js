;(() => {
  const $ = function $(selector) {
    const elements = document.querySelectorAll(selector)

    const obj = {}
    obj.autocomplete = arr => {
      for (const element of elements) {
        let currentFocus
        element.addEventListener('input', function() {
          let box,
            search,
            val = this.value
        let form = document.getElementById("form");
        let link = document.getElementById("link");
          // Вызываем функцию, которую мы записали ниже
          closeAllLists()
          if (!val) {
            return false
          }
          currentFocus = -1
          // Создаем коробку где будут все значения и задаем ему атрибуты
          box = document.createElement('DIV')
          box.setAttribute('id', this.id + 'autocomplete-list')
          box.setAttribute('class', 'autocomplete-items')
          // Коробку, которую только что создали вставляем дочернил элементом автозаполнения
          this.parentNode.appendChild(box)
          // для каждого элемента в массиве
          for (let i = 0; i < arr.length; i++) {
            // Проверяем начинается ли имя с тех же букв что и написано в поле
            if (
              arr[i].substr(0, val.length).toUpperCase() === val.toUpperCase()
            ) {
              // Создаем div для каждого элемента массива
              search = document.createElement('DIV')
              search.setAttribute('class', 'autocomplete-list'+ arr[i]);
              // буквы написанные и соответсвующие поиску будут жирными
              search.innerHTML =
                '<strong>' + arr[i].substr(0, val.length) + '</strong>'
              search.innerHTML += arr[i].substr(val.length)
              search.innerHTML += "<input type='hidden' value='" + arr[i] + "'>"
              search.addEventListener('click', function(e) {
                // вставляем то, что у нас в выпадающем списке
                element.value = this.getElementsByTagName('input')[0].value
                // снова запускаем нашу закрывающую функцию
                closeAllLists()
              })
              link.addEventListener("click", function (params) {
                let search = element.value.replace(/\s/, '-')
                form.setAttribute('action', 'https://dota2.ru/heroes/' + search)
                
              })
              box.appendChild(search)
            }
          }
        })
        element.addEventListener('keydown', function(e) {
          let box = document.getElementById(this.id + 'autocomplete-list')
          if (box) box = box.getElementsByTagName('div')
          if (e.keyCode == 40) {
            // если нажать на стрелку вниз, то можно будет выбирать)
            currentFocus++
            //  и делать выбранный элемент заметным)
            addActive(box)
          } else if (e.keyCode === 38) {
            //  а если нажать на клвашиу вверх, то все то же самое что и со стрелкой вниз)
            currentFocus--
            addActive(box)
          } else if (e.keyCode === 13) {
            // Отменяем отправку формы по нажатию ENETER
            e.preventDefault()
            if (currentFocus > -1) {
              if (box) box[currentFocus].click()
            }
          }
        })
        function addActive(box) {
          // с этой фунцией делаем элемент активным
          if (!box) return false
          // фукнция для удаления активного класса
          removeActive(box)
          if (currentFocus >= box.length) currentFocus = 0
          if (currentFocus < 0) currentFocus = box.length - 1
          // Добавляем активный класс
          box[currentFocus].classList.add('autocomplete-active')
        }
        function removeActive(x) {
          for (let i = 0; i < x.length; i++) {
            x[i].classList.remove('autocomplete-active')
          }
        }
        function closeAllLists(elmnt) {
          // закрыть все данные кроме того, который был написан
          let x = document.getElementsByClassName('autocomplete-items')
          for (let i = 0; i < x.length; i++) {
            if (elmnt !== x[i] && elmnt !== element) {
              x[i].parentNode.removeChild(x[i])
            }
          }
        }
        document.addEventListener('click', function(e) {
          closeAllLists(e.target)
        })
      }
      return obj
    }
    return obj
  }
  window.$ = $
})()
