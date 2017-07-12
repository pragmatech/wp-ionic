import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { WordpressProvider } from '../../providers/wordpress/wordpress';

@IonicPage({
    segment: 'category/:slug',
})
@Component({
    selector: 'category',
    templateUrl: 'category.html',
    providers:[ WordpressProvider ]
})
export class Category {

    type:string = 'カテゴリ';
    title:string;
    search: any = {
        type : 'wait',
        slug : this.navParams.get('slug')
    }

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public wp: WordpressProvider
    ) {}

    ionViewDidLoad(){
        if(this.navParams.get('title')){
            this.title = this.navParams.get('title');
        }else{
            const f = () => new Promise(
                (resolve)=>{
                    resolve(this.navParams.get('slug'));
                }
            );
            f().then(
                (slug:string) => {
                    this.wp.getCategory(slug)
                        .subscribe(
                            data => this.title = data.name
                        );
                }
            );
        }

        this.search = {
            type: 'post',
            params: {
                slug : this.navParams.get('slug')
            }
        }
    }
}