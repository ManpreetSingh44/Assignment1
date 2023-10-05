(function() 
{
    let LoadHeader = () => {
        /* use jQuery to fetch the contents of header.html */
        $.get("./views/shared/header.html", (htmlData) => {
            // console.log(htmlData);
            $("header").html(htmlData);
        
            // once navbar loaded, attach event handlers to each link
            $("li>a.nav-link").each(() => {
                $("li>a").on("click", (event) => {
                    // don't fire as a normal html link
                    event.preventDefault();

                    // set the page title to the id attribute of the selected a element
                    document.title = $(event.currentTarget).prop("id");
                    console.log("test" +document.title);
                    LoadContent();
                })            
            })
        });
    }
// Load footer
    let LoadFooter = () => {
        $.get("./views/shared/footer.html", (htmlData) => {
            $("footer").html(htmlData);
        })
    }
// load content
    let LoadContent = () => {
        let activePage = document.title;  
        $.get(`views/${activePage}.html`, (htmlData) => {
            $("main").html(htmlData);
            history.pushState({}, "", activePage);
        });
    }
    

    let Start = () => {
        let x = 1;
        LoadHeader();
        LoadFooter();
  
    }

    // attach to window onLoad event listener
    window.addEventListener('load', Start);
})();
