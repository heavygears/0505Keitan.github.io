setInterval('clock()',500); //0.5秒毎にclock()を実行

let i = (n) => ('0' + n).slice(-2);
let display = (n, e) => document.getElementById(n).innerText = e;

function clock() {
    display("now_year", year());
    display("view_day", day());
    display("view_hour", hour(year()+"/12/31 23:59:59"));
    display("view_min", min(year()+"/12/31 23:59:59"));
    display("view_sec", sec(year()+"/12/31 23:59:59"));
}

function year() {
	let now = new Date();
	let year = now.getFullYear();
	return year;
}

function day() {
    let now = new Date();
    let anyDay = new Date(year(),11,31);
    let remainDay = Math.floor((anyDay - now) / (24*60*60*1000));
    remainDay++;
    return remainDay;
}

function hour(date) {
    let now = new Date();
    let anyDate = new Date(date);//カウントダウンしたい日
    let ms = anyDate - now;//日数を計算
    let ha = Math.floor(ms / 3600000);//時間を取得
    let haa = ha % 24;
    return haa;
}

function min(date) {
    let now = new Date();
    let anyDate = new Date(date);//カウントダウンしたい日
    let ms = anyDate - now;//日数を計算
    let ha = Math.floor(ms / 3600000);//時間を取得
    let ma = Math.floor((ms - ha * 3600000) / 60000);//分を取得
    return i(ma);
}

function sec(date) {
    let now = new Date();
    let anyDate = new Date(date);//カウントダウンしたい日
    let ms = anyDate - now;//日数を計算
    let ha = Math.floor(ms / 3600000);//時間を取得
    let ma = Math.floor((ms - ha * 3600000) / 60000);//分を取得
    let sa = Math.round((ms - ha * 3600000 - ma * 60000) / 1000);//秒を取得
    return i(sa);
}