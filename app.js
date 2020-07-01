var task = [];
document.getElementById('button-addon2').addEventListener('click',()=>{
    const t = document.querySelector('.form-control').value;
    task.push(t);
    listcontroller();
}, false);

document.querySelector('.task-list').addEventListener('click',(event)=>{
    var l = event.target.textContent;
    if(l=='Delete'){
    var i = event.target.parentNode.id.split('-');
    task.splice(i[1],1);
    listcontroller();
    } else if(l=='Mark as Done'){
        event.target.parentNode.parentNode.previousElementSibling.classList.remove('alert-primary');
        event.target.parentNode.parentNode.previousElementSibling.classList.add('alert-success');
    } else if(l=='Mark as Not Done'){
        event.target.parentNode.parentNode.previousElementSibling.classList.remove('alert-success');
        event.target.parentNode.parentNode.previousElementSibling.classList.add('alert-primary');
    }
})

var listcontroller = ()=>{
    var html='';
    const list = document.querySelector('.task-list');
    task.forEach((t)=>{
    html+=`<div class="input-group" id='tast-${task.indexOf(t)}'>
    <div class="alert alert-primary w-75" role="alert">${t}</div>
    <div class="input-group-append">
      <button class="btn btn-outline-primary dropdown-toggle h-75" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">What to do?</button>
      <div class="dropdown-menu">
        <!--a class="dropdown-item">Edit</a-->
        <a class="dropdown-item">Delete</a>
        <a class="dropdown-item">Mark as Done</a>
        <a class="dropdown-item">Mark as Not Done</a>
      </div>
    </div>
  </div>`;
    });
  list.innerHTML = html;
}