$(document).ready(function(){
    const colors = { '1':'#000000',
        '2':'#2B8EAD',
        '3':'#333333', '4':'#6F98A8',
        '5':'#FFFFFF', '6':'#BFBFBF',
        '7':'#EFEFEF', '8':'#2F454E',
        '9':'#72C3DC'};
    var x = Object.keys(colors);
    let rowHt = (num,i)=>{
        return '<div class="col-3 grid c'+num+'"><div class="num">'+num+'</div></div>'+(i==3 ? '<div class="col-3 grid">\
            <button id="shuf" class="btn btn-primary m-2">SHUFFLE</button>\
            <button id="sort" class="btn btn-primary m-2">SORT</button>\
        </div>':'');
    },
    shuffle = x=>{
        createGrid(x.sort(() => Math.random() - 0.5));
    },
    sort = x=>{
        createGrid(x.sort());
    }
    createGrid = (x)=>{
        let html='',ss = 960,  /* screen size */
        sh = window.innerHeight-30, /* screen height */
        css = 'body{background-color:#f8f9fa;}.grid{width:'+(ss/4)+'px;height:'+(sh/3)+'px;color:white;}'; /* css variable  */
        
        for(let i=1;i<9;i++){
            html += (x[i-1]%3==1) ? '<div class="row">':'';
            css += '.c'+i+'{ background-color:'+colors[(x[i-1]).toString()]+'}';
            html += rowHt(x[i-1],i);
            html += (x[i-1]%3==0) ? '</div>':'';
        }
        $('#root').html(html);
        $('head style').remove();
        $('head').append('<style>'+css+'</style>');
        $('#shuf').unbind().click(()=>{
            shuffle(x);
        });
        $('#sort').unbind().click(()=>{
            sort(x);
        });
    }
    createGrid(x);
})