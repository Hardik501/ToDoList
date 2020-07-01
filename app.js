var task = [];
document.getElementById('button-addon2').addEventListener('click',()=>{
    var t = {};
    t.value = document.querySelector('.form-control').value;
    t.done = 0;
    task.push(t);
    listcontroller();
}, false);

document.querySelector('.task-list').addEventListener('click',(event)=>{
    var l = event.target.textContent;
    if(l=='Delete'){
        var i = event.target.parentNode.id.split('-');
        task.splice(i[1],1);
        event.target.parentNode.parentNode.parentNode.remove(event.target.parentNode);
    } else if(l=='Mark as Done'){
        var i = event.target.parentNode.parentNode.parentNode.id.split('-');
        task[i[1]].done =1;
        listcontroller();
    } else if(l=='Mark as Not Done'){
        var i = event.target.parentNode.parentNode.parentNode.id.split('-');
        task[i[1]].done =0;
        listcontroller();
    }
})

var listcontroller = ()=>{
    var html='';
    const list = document.querySelector('.task-list');
    task.forEach((t)=>{
        if(t.done===0){
            html+=`<div class="input-group" id='tast-${task.indexOf(t)}'>
            <div class="alert alert-primary w-75" role="alert">${t.value}</div>
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
        }else{
            html+=`<div class="input-group" id='tast-${task.indexOf(t)}'>
            <div class="alert alert-success w-75" role="alert">${t.value}</div>
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
        }

    });
  list.innerHTML = html;
}
