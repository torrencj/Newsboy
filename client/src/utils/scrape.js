// Our scraping tools
import Request from "request";
import Cheerio from "cheerio";

const Scrape = () => {
  // First, we grab the body of the html with request
  Request("http://www.nytimes.com/", function(error, response, html) {
    // Then, we load that into cheerio and save it to $ for a shorthand selector
    var $ = Cheerio.load(html);
    // Now, we grab every h2 within an article tag, and do the following:
    $("article a").each(function(i, element) {

      // Save an empty result object
      var result = {};

      // Add the text and href of every link, and save them as properties of the result object
      result.title = $(this).children("a").text();
      result.link = $(this).children("a").attr("href");


      console.log(result);
      // Using our Article model, create a new entry
      // This effectively passes the result object to the entry (and the title and link)
      // var entry = new Article(result);

      // Now, save that entry to the db
      // entry.save(function(err, doc) {
      //   // Log any errors
      //   if (err) {
      //     console.log(err);
      //   }
      //   // Or log the doc
      //   else {
      //     console.log(doc);
      //   }
      // });
    });
  });
}


export default Scrape;
