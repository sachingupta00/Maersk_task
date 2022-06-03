$(document).ready(function(){
    const colors = { '1':{bg:'#000000',fc:'#FFFFFF'},
        '2':{bg:'#2B8EAD',fc:'#FFFFFF'},
        '3':{bg:'#333333',fc:'#FFFFFF'}, '4':{bg:'#6F98A8',fc:'#FFFFFF'},
        '5':{bg:'#FFFFFF',fc:'#000000'}, '6':{bg:'#BFBFBF',fc:'#FFFFFF'},
        '7':{bg:'#EFEFEF',fc:'#000000'}, '8':{bg:'#2F454E',fc:'#FFFFFF'},
        '9':{bg:'#72C3DC',fc:'#FFFFFF'}};
    var x = Object.keys(colors);
    let rowHt = (num,i)=>{
        return '<div class="col-3 grid c'+num+' text-center font-weight-bold pt-5"><div class="num">'+num+'</div></div>'+(i==3 ? '<div class="col-3 grid buttons">\
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
        let html='',
        ss = 960,  /* screen size */
        sh = window.innerHeight-60, /* screen height */
        css = '.grid{width:'+(ss/4)+'px;height:'+(sh/3)+'px;}'; /* css variable  */
        
        for(let i=1;i<=9;i++){
            html += (i%3==1) ? '<div class="row">':'';
            css += '.c'+i+'{ background-color:'+colors[(i).toString()].bg+';color:'+colors[(i).toString()].fc+';}';
            html += rowHt(x[i-1],i);
            html += (i%3==0) ? '</div>':'';
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