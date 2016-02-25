import { articles } from './articles';


export function ArticlesFactory() {
  'ngInject';

  return {
    query: function() {
      return articles;
    },

    findOne: function(id) {
      var result = articles.filter(function(obj) {
        return obj.img.src == id;
      });

      return result[0];
    }
  };
}