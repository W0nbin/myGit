import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


class Up {
    constructor(name, sex, step) {
        this.name = name;
        this.sex = sex;
        this.step = step;
    }
}

class Down {
    constructor(name, sex, step) {
        this.name = name;
        this.sex = sex;
        this.step = step;
    }
}

class Outer {
    constructor(name, sex, step) {
        this.name = name;
        this.sex = sex;
        this.step = step;
    }
}

// 상의
const tShirt = new Up("tShirt", "unisex", 0);
const halfShirt = new Up("halfShirt", "unisex", 1);
const halfKnit = new Up("halfKnit", "unisex", 2);
const longsleeve = new Up("longsleeve", "unisex", 3);
const shirt = new Up('shirt', "unisex", 3);
const sweatShirt = new Up("sweatShirt", "unisex", 4);
const hoodie = new Up("hoodie", "unisex", 4);
const cottonKnit = new Up("cottonKnit", "unisex", 5);
const woolKnit = new Up("woolKnit", "unisex", 6);

// 외투
const windbreaker = new Outer("windbreaker", "unisex", 1);
const hoodZip = new Outer("hoodZip", "unisex", 1);
const jacket = new Outer("jacket", "unisex", 2);
const cardigan = new Outer("cardigan", "unisex", 2);
const coat = new Outer("coat", "unisex", 2);
const heavy_coat = new Outer("heavy_coat", "unisex", 3);
const padding = new Outer("padding", "unisex", 3);
const long_padding = new Outer("long_padding", "unisex", 3);

// 하의
const half_pants = new Down("half_pants", "unisex", 0);
const linen = new Down("linen", "unisex", 1);
const halfSkirt = new Down("halfSkirt", "female", 1);
const cotton = new Down("cotton", "unisex", 2);
const slacks = new Down("slacks", "unisex", 2);
const thinDenim = new Down("thinDenim", "unisex", 3);
const skirt = new Down("skirt", "female", 4);
const nylon = new Down("nylon", "unisex", 4);
const sweatPants = new Down("sweatPants", "unisex", 5);
const denim = new Down("denim", "unisex", 5);
const corduroy = new Down("corduroy", "unisex", 6);

// 기온에 따른 의상 추천 함수
export default function recommendOutfit(temperature) {
    let tops = [];
    let bottoms = [];
    let outerwear = [];

    if (temperature <= 5) {
        tops = ["sweatShirt", "hoodie", "cottonKnit", "woolKnit"];
        outerwear = ["heavy_coat", "padding", "long_padding"];
        bottoms = ["sweatPants", "denim", "corduroy"];
    } else if (temperature <= 10) {
        tops = ["sweatShirt", "hoodie", "cottonKnit"];
        outerwear = ["windbreaker", "hoodZip", "jacket"];
        bottoms = ["cotton", "slacks"];
    } else if (temperature <= 15) {
        tops = ["sweatShirt", "hoodie", "cottonKnit"];
        outerwear = ["windbreaker", "hoodZip", "jacket"];
        bottoms = ["linen", "thinDenim", "sweatPants"];
    } else if (temperature <= 20) {
        tops = ["longsleeve", "shirt"];
        outerwear = ["windbreaker"];
        bottoms = ["cotton", "slacks"];
    } else if (temperature <= 24) {
        tops = ["tShirt", "halfShirt", "halfKnit"];
        bottoms = ["half_pants", "linen"];
    } else if (temperature <= 28) {
        tops = ["tShirt", "halfShirt"];
        bottoms = ["half_pants", "linen"];
    } else {
        tops = ["tShirt"];
        bottoms = ["half_pants"];
    }

    return {
        tops,
        bottoms,
        outerwear
    };
}

