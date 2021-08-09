const esi = "Empty String Input ";
const v_dom = {
    blocks : {
        h1 (str = esi) {
            return `<h1>${str}</h1>`;
        },
        h2 (str = esi) {
            return `<h2>${str}</h2>`;
        },
        h3 (str = esi) {
            return `<h3>${str}</h3>`;
        },
        h4 (str = esi) {
            return `<h4>${str}</h4>`;
        },
        h5 (str = esi) {
            return `<h5>${str}</h5>`;
        },
        h6 (str = esi) {
            return `<h6>${str}</h6>`;
        },
        p (str = esi) {
            return `<p>${str}</p>`;
        },
        img(url = "Empty URL input") {
            return `<img src="${url}">`  
        },
        hero_v (title="Empty HERO_V Title Space", subtitle="SubTitle Text Space for HERO_V", text="Nightwatch.js was created in Oslo, Norway by Pineview.io – an independent software consultancy; it is now being maintained by all these fine people with help from all our contributors.", imgUrl="https://nightwatchjs.org/images/symbol-nightwatch.svg") {
            return `<v_hero>${this.h2(title)}${this.h5(subtitle)}${this.p(text)}${this.img(imgUrl)}</v_hero>`;
        }
    },
		register_block(blockParams = null){
			console.log("REGISTER BLOCK: "+blockParams);
			return blockParams;
		},
    block_count(){
        var itemNumber = 0;
        for (const property in v_dom.blocks) {
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

/*
console.log(v_dom.block_count());
console.log(v_dom.blocks_number);
*/

module.exports = v_dom;