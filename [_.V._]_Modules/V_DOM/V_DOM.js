console.clear();


const V_DOM = {
    blocks : {
        h1 (str = "Empty String Input") {
            return `<h1>${str}</h1>`;
        },
        h2 (str = "Empty String Input") {
            return `<h2>${str}</h2>`;
        },
        h3 (str = "Empty String Input") {
            return `<h3>${str}</h3>`;
        },
        h4 (str = "Empty String Input") {
            return `<h4>${str}</h4>`;
        },
        h5 (str = "Empty String Input") {
            return `<h5>${str}</h5>`;
        },
        h6 (str = "Empty String Input") {
            return `<h6>${str}</h6>`;
        },
        p (str = "Empty String Input") {
            return `<p>${str}</p>`;
        },
        img(url = "Empty URL input") {
            return `<img src="${url}">`  
        },
        hero_v (title="Empty HERO_V Title Space", subtitle="SubTitle Text Space for HERO_V", text="Nightwatch.js was created in Oslo, Norway by Pineview.io – an independent software consultancy; it is now being maintained by all these fine people with help from all our contributors.", imgUrl="https://nightwatchjs.org/images/symbol-nightwatch.svg") {
            return `<v_hero>${this.h2(title)}${this.h5(subtitle)}${this.p(text)}${this.img(imgUrl)}</v_hero>`;
        }
    },
    block_count(){
        var itemNumber = 0;
        for (const property in V_DOM.blocks) {
            //console.log(`${property}: ${V_DOM.blocks[property]}`);
            itemNumber++;
        };
        this.blocks_number = itemNumber;
        return itemNumber;
    },
    h1(str){
        return this.blocks.h1(str);
    },
    h2(str){
        return this.blocks.h2(str);
    },
    h3(str){
        return this.blocks.h3(str);
    },
    h4(str){
        return this.blocks.h4(str);
    },
    h5(str){
        return this.blocks.h5(str);
    },
    h6(str){
        return this.blocks.h6(str);
    },
    p(str){
        return this.blocks.p(str);
    },
    hero_v (title, subtitle, text, imgUrl) {
        return this.blocks.hero_v(title, subtitle, text, imgUrl);
    }
}

console.log(V_DOM.block_count());
console.log(V_DOM.blocks_number);
