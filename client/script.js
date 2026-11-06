const showAllBtn = document.querySelector('#show-all-btn')
const diaryEntries = document.querySelector('#diary-entries')
const hideAllBtn = document.querySelector("#hide-all-btn")
let deleteBtns = null;


function showAll(diaryData) {
    const diary = diaryData.data
    diaryEntries.innerHTML = "";
    
    for (let entry of diary) {
        const { category, id, date, text, time } = entry
        console.log(category, id, date, text, time)
        const thisEntry = document.createElement('div')
        thisEntry.id = `entry-${id}`
        thisEntry.classList.add('journal-entry')
        
        const dateBox = document.createElement('p')
        const timeBox = document.createElement('p')
        const textBox = document.createElement('p')
        const categoryBox = document.createElement('p')
        
        dateBox.innerText = date;
        timeBox.innerText = time;
        textBox.innerText = text;
        categoryBox.innerText = category;
        
        thisEntry.appendChild(dateBox)
        thisEntry.appendChild(timeBox)
        thisEntry.appendChild(textBox)
        thisEntry.appendChild(categoryBox)

        const deleteBtn = document.createElement('button')
        deleteBtn.innerText = 'Delete entry'
        deleteBtn.classList.add ('delete-btn')
        deleteBtn.id = `delete-button-${id}`
        deleteBtn.addEventListener('click', async () => {
            
            await fetch(`http://localhost:3000/diary/${id}`, {method: 'DELETE'})
            
            
            document.getElementById(`entry-${id}`).remove();
        })
        thisEntry.appendChild(deleteBtn);
        
        
        diaryEntries.appendChild(thisEntry);
        
    }
    
    
    console.log(deleteBtns)
}


showAllBtn.addEventListener('click', async () => {
    const response = await fetch("http://localhost:3000/diary");
    const diary = await response.json();
    showAll(diary);
    
})

hideAllBtn.addEventListener('click', () => {
    diaryEntries.innerHTML = "";
})


