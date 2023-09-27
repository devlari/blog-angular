import { Injectable } from '@angular/core';
import { news, dataArticle } from '../types/news';

@Injectable({
    providedIn: 'root'
})
export class MockDataService {

    mocked = [
        {
            id: 1,
            photo: "https://www.zup.com.br/wp-content/uploads/2021/03/5e32dc5538c14b0d4b28f87f_imagens-angular3-1024x677.png",
            title: "Nova versão do Angular!",
            description: "Dicas e estratégias para usufruir da versão 15.12."
        },
        {
            id: 2,
            photo: "https://www.simplilearn.com/ice9/free_resources_article_thumb/parts_of_nodejs.png",
            title: "Node.js: O que é e como funciona?",
            description: "Entenda o que é e como funciona o Node.js, uma das tecnologias mais populares da atualidade."
        },
        {
            id: 3,
            photo: "https://p92.hu/binaries/content/gallery/p92website/technologies/htmlcssjs-overview.png",
            title: "Desenvolvimento Web com HTML, CSS e JS",
            description: "Aprenda a criar sites interativos usando as tecnologias web fundamentais."
        },
        {
            id: 4,
            photo: "https://www.khomp.com/wp-content/uploads/2017/05/metodologia-design-thinking-khomp.jpg",
            title: "Princípios de Design de Software",
            description: "Explorando os princípios essenciais para criar software robusto e escalável."
        },
        {
            id: 5,
            photo: "https://blog.convisoappsec.com/wp-content/uploads/2015/12/6DicasDeSeguran%C3%A7a_Prancheta-1-min-1-1200x900.png",
            title: "Práticas de Segurança em Desenvolvimento",
            description: "Dicas para garantir a segurança de seu código e proteger contra vulnerabilidades."
        }
    ];


    getMockData(): news {
        setTimeout(() => { }, 2000);

        return this.mocked
    }

    getDetails(id: number): dataArticle {
        return this.mocked.find((item) => item.id == id) as dataArticle;
    }
}