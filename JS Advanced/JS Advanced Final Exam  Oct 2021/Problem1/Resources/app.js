window.addEventListener('load', solve);

// function solve() {
//     function isEmpty(str) {
//         return (!str || str.length === 0 );
//     }
//     function addSong(genre, name, author, date) {
//         songs.push({
//             genre: genre,
//             name: name,
//             author: author,
//             date: date,
//             liked: false,
//             saved: false
//         })
//     }
//     function renderSongs() {
//         // All hits
//         var html = ''
//         html += '<h1>Collection of songs</h1>'
//         var likeButtonDisabled = ''
//         for (var i=0; i<songs.length; i++) {
//             if (songs[i].saved) continue
//
//             if (songs[i].liked) {
//                 likeButtonDisabled = 'disabled'
//             } else {
//                 likeButtonDisabled = ''
//             }
//
//             html += '<div class="hits-info">'
//             html += '<img src="./static/img/img.png">'
//             html += '<h2>Genre: '+ songs[i].genre +'</h2>'
//             html += '<h2>Name: '+ songs[i].name +'</h2>'
//             html += '<h2>Author: '+ songs[i].author +'</h2>'
//             html += '<h3>Date: '+ songs[i].date +'</h3>'
//             html += '<button class="save-btn">Save song</button>'
//             html += '<button class="like-btn" '+ likeButtonDisabled +'>Like song</button>'
//             html += '<button class="delete-btn">Delete</button>'
//             html += '</div>'
//         }
//
//         document.getElementsByClassName('all-hits-container')[0].innerHTML = html
//
//         // Saved
//         html = ''
//         html += '<h1>Saved songs</h1>'
//         var likeButtonDisabled = ''
//         for (var i=0; i<songs.length; i++) {
//             if (!songs[i].saved) continue
//
//             if (songs[i].liked) {
//                 likeButtonDisabled = 'disabled'
//             } else {
//                 likeButtonDisabled = ''
//             }
//
//             html += '<div class="hits-info">'
//             html += '<img src="./static/img/img.png">'
//             html += '<h2>Genre: '+ songs[i].genre +'</h2>'
//             html += '<h2>Name: '+ songs[i].name +'</h2>'
//             html += '<h2>Author: '+ songs[i].author +'</h2>'
//             html += '<h3>Date: '+ songs[i].date +'</h3>'
//             html += '<button class="delete-btn">Delete</button>'
//             html += '</div>'
//         }
//
//         document.getElementsByClassName('saved-container')[0].innerHTML = html
//     }
//     function getSongNameFromEvent(e) {
//         var sibling = e.target.previousElementSibling
//         var songName = ''
//         do {
//             if (sibling.innerHTML.indexOf('Name: ') !== -1) {
//                 songName = sibling.innerHTML.replace('Name: ', '')
//             }
//             sibling = sibling.previousElementSibling
//         } while(!songName)
//
//         return songName
//     }
//     function getSongWithName(songName) {
//         for (var i=0; i<songs.length; i++) {
//             if (songs[i].name == songName) {
//                 return songs[i]
//             }
//         }
//     }
//
//     // Events
//
//     function handleAddSongClick(e) {
//         if (!isEmpty(genreField.value) && !isEmpty(nameField.value) && !isEmpty(authorField.value) && !isEmpty(dateField.value)) {
//             addSong(genreField.value, nameField.value, authorField.value, dateField.value)
//             init()
//         }
//         e.preventDefault()
//     }
//     function handleLikeButtonClick(e) {
//         // Like the song
//         var songName = getSongNameFromEvent(e)
//         var song = getSongWithName(songName)
//         song.liked = true
//
//         // Update the total likes counter
//         var paragraphs = document.getElementsByTagName('p')
//         for (var i=0; i<paragraphs.length; i++) {
//             if (paragraphs[i].parentElement.parentElement.getAttribute('id') == 'total-likes') {
//                 var totalNumberOfLikes = parseInt(paragraphs[i].innerHTML.replace('Total Likes: ', ''), 10)
//                 totalNumberOfLikes += 1
//                 paragraphs[i].innerHTML = 'Total Likes: ' + totalNumberOfLikes
//             }
//         }
//
//         // Disable button
//         e.target.setAttribute('disabled', '')
//
//         init()
//     }
//     function handleSaveButtonClick(e) {
//         var songName = getSongNameFromEvent(e)
//         var song = getSongWithName(songName)
//         song.saved = true
//
//         init()
//     }
//     function handleDeleteButtonClick(e) {
//         var songName = getSongNameFromEvent(e)
//
//         for (var i=0; i<songs.length; i++) {
//             if (songs[i].name == songName) {
//                 songs.splice(i, 1)
//
//                 init()
//                 return
//             }
//         }
//     }
//     function createEvents() {
//         var addButton = document.getElementById('add-btn')
//
//         addButton.removeEventListener('click', handleAddSongClick)
//         addButton.addEventListener('click', handleAddSongClick)
//
//         // Like buttons
//         var likeButtons = document.getElementsByClassName('like-btn')
//         if (likeButtons.length > 0) {
//             for (var i=0; i<likeButtons.length; i++) {
//                 likeButtons[i].removeEventListener('click', handleLikeButtonClick)
//                 likeButtons[i].addEventListener('click', handleLikeButtonClick)
//             }
//         }
//
//         // Save buttons
//         var saveButtons = document.getElementsByClassName('save-btn')
//         if (saveButtons.length > 0) {
//             for (var i=0; i<saveButtons.length; i++) {
//                 saveButtons[i].removeEventListener('click', handleSaveButtonClick)
//                 saveButtons[i].addEventListener('click', handleSaveButtonClick)
//             }
//         }
//
//         // Delete buttons
//         var deleteButtons = document.getElementsByClassName('delete-btn')
//         if (deleteButtons.length > 0) {
//             for (var i=0; i<deleteButtons.length; i++) {
//                 deleteButtons[i].removeEventListener('click', handleDeleteButtonClick)
//                 deleteButtons[i].addEventListener('click', handleDeleteButtonClick)
//             }
//         }
//     }
//     function init() {
//         renderSongs()
//         createEvents()
//     }
//
//
//     // Vars
//     var genreField = document.getElementById('genre')
//     var nameField = document.getElementById('name')
//     var authorField = document.getElementById('author')
//     var dateField = document.getElementById('date')
//     var songs = []
//
//     // // Test
//     genreField.value = 'the genre'
//     nameField.value = 'song name'
//     authorField.value = 'the author'
//     dateField.value = '02/09'
//
//     // Init
//     init()
// }



// function solve() {
//     const fields = document.querySelectorAll('.container-text input');
//     const addButton = document.querySelector('.container-text button');
//     const allHits = document.querySelector('#all-hits div');
//     const savedHits = document.querySelector('#saved-hits div');
//     const totalLikes = document.querySelector('#total-likes div');
//
//     // console.log(fields);
//     // console.log(addButton);
//     // console.log(allHits);
//     // console.log(savedHits);
//     // console.log(totalLikes);
//     const input = {
//         genre: fields[0],
//         name: fields[1],
//         author: fields[2],
//         date: fields[3],
//     }
//
//     addButton.addEventListener('click', (event) => {
//         event.preventDefault();
//
//         const genre = input.genre.value.trim();
//         const name = input.name.value.trim();
//         const author = input.author.value.trim();
//         const date = input.date.value.trim();
//
//         if (genre == '' || name == '' || author == '' || date == '') {
//             return;
//         }
//
//         const divEl = e('div', ``, 'hits-info');
//         const imgEl = e('img', './static/img/img.png');
//         const genreEl = e('h2', `Genre: ${genre}`);
//         const nameEl = e('h2', `Name: ${name}`);
//         const authorEl = e('h2', `Author: ${author}`);
//         const dateEl = e('h3', `Date: ${date}`);
//         const saveSongBtn = e('button', 'Save song', 'save-btn');
//         const likeSongBtn = e('button', 'Like song', 'like-btn');
//         const deleteSongBtn = e('button', 'Delete', 'delete-btn');
//
//         divEl.appendChild(imgEl);
//         divEl.appendChild(genreEl);
//         divEl.appendChild(nameEl);
//         divEl.appendChild(authorEl);
//         divEl.appendChild(dateEl);
//         divEl.appendChild(saveSongBtn);
//         divEl.appendChild(likeSongBtn);
//         divEl.appendChild(deleteSongBtn);
//
//         allHits.appendChild(divEl);
//
//         input.genre.value = '';
//         input.name.value = '';
//         input.author.value = '';
//         input.date.value = '';
//
//         likeSongBtn.addEventListener('click', () => {
//             let pEl = totalLikes.querySelector('p').textContent;
//             let newLikes = Number(pEl.slice(-1)) + 1;
//             totalLikes.querySelector('p').textContent = pEl.substr(0, pEl.length - 1) + newLikes;
//             likeSongBtn.disabled = true;
//
//         })
//
//         saveSongBtn.addEventListener('click', () => {
//             const saveSongDivEl = e('div', ``, 'hits-info');
//             saveSongDivEl.appendChild(imgEl);
//             saveSongDivEl.appendChild(genreEl);
//             saveSongDivEl.appendChild(nameEl);
//             saveSongDivEl.appendChild(authorEl);
//             saveSongDivEl.appendChild(dateEl);
//             saveSongDivEl.appendChild(deleteSongBtn);
//
//             savedHits.appendChild(saveSongDivEl);
//             saveSongBtn.parentNode.parentNode.removeChild(divEl);;
//
//         })
//
//         deleteSongBtn.addEventListener('click', () => {
//             let divForDelete = deleteSongBtn.parentNode;
//             deleteSongBtn.parentNode.parentNode.removeChild(divForDelete);
//
//             let pEl = totalLikes.querySelector('p').textContent;
//             let newLikes = Number(pEl.slice(-1)) - 1;
//             totalLikes.querySelector('p').textContent = pEl.substr(0, pEl.length - 1) + newLikes;
//         })
//
//
//     })
//
//     function e(type, content, className) {
//         let element = document.createElement(type);
//
//         if (type === 'img') {
//             element.src = content;
//         } else {
//             element.textContent = content;
//         }
//
//         if (className) {
//             element.className = className;
//         }
//
//         return element;
//     }
// }



// function solve() {
//     let inputElements = document.querySelector('form').querySelectorAll('input');
//     let input = {
//         genre: inputElements[0],
//         name: inputElements[1],
//         author: inputElements[2],
//         date: inputElements[3],
//     };
//
//     let addButton = document.querySelector('#add-btn');
//     addButton.addEventListener('click', addSong);
//
//     let addedSongsElement = document.querySelectorAll('.all-hits-container')[0];
//     let savedSongs = document.querySelectorAll('.saved-container')[0];
//     let pLikesCountElement = document.querySelectorAll('.likes')[0].querySelector('p');
//
//     function addSong(e){
//         e.preventDefault();
//
//         if (input.name.value == '' || input.genre.value == ''|| input.author.value == '' || input.date.value == '') {
//             return;
//         }
//
//         let divElement = createElement('div', '', 'hits-info');
//
//         let imageElement = document.createElement('img');
//         imageElement.setAttribute('src', './static/img/img.png');
//
//         let h2Genre = createElement('h2', 'Genre: ' + input.genre.value);
//         let h2Name = createElement('h2', 'Name: ' + input.name.value);
//         let h2Author = createElement('h2', 'Author: ' + input.author.value);
//         let h3Date = createElement('h3', 'Date: ' + input.date.value);
//
//         let saveButton = createElement('button', 'Save song', 'save-btn');
//         let likeButton = createElement('button', 'Like song', 'like-btn');
//         let deleteButton = createElement('button', 'Delete', 'delete-btn');
//
//         divElement.appendChild(imageElement);
//         divElement.appendChild(h2Genre);
//         divElement.appendChild(h2Name);
//         divElement.appendChild(h2Author);
//         divElement.appendChild(h3Date);
//         divElement.appendChild(saveButton);
//         divElement.appendChild(likeButton);
//         divElement.appendChild(deleteButton);
//
//         addedSongsElement.appendChild(divElement);
//
//         input.name.value = '';
//         input.author.value  = '';
//         input.genre.value  = '';
//         input.date.value  = '';
//
//         deleteButton.addEventListener('click', deleteSong);
//         likeButton.addEventListener('click', increaseLikes);
//         saveButton.addEventListener('click', saveSong);
//     }
//
//     function saveSong(e){
//         let elementToMove = e.currentTarget.parentElement;
//         savedSongs.appendChild(elementToMove);
//
//         let buttons = elementToMove.querySelectorAll('button');
//
//         let saveButton =buttons[0];
//         let likeButton =buttons[1];
//
//         saveButton.remove();
//         likeButton.remove();
//     }
//
//     function increaseLikes(e){
//         let pInfo = pLikesCountElement.textContent.split(' ');
//         let count = Number(pInfo[2]);
//         count++;
//         pLikesCountElement.textContent = `Total Likes: ${count}`;
//         let button = e.currentTarget;
//         button.setAttribute('disabled', '');
//     }
//
//     function deleteSong(e){
//         let parentElement = e.currentTarget.parentElement;
//         parentElement.remove();
//
//         //let pInfo = pLikesCountElement.textContent.split(' ');
//         //let count = Number(pInfo[2]);
//         // count--;
//         //pLikesCountElement.textContent = `Total Likes: ${count}`;
//     }
//
//     function createElement(tagName, content, className){
//         let element = document.createElement(tagName);
//         element.textContent = content;
//         if(className){
//             element.classList.add(className);
//         }
//
//         return element;
//     }
// }

