$(document).ready(function(){
    $('.quotes').hide();
    $('.quotes').fadeIn(700);
    var quotes=["Coffee is a language in itself","Hardwork beats talent when talent doesn't work hard","i destroy my enemy when I make him my Friend","Don't be afraid of failure this is the way to succeed","Computer Science is no more about computers than astronomy is about telescopes.","Programs must be written for people to read, and only incidentally for machines to execute.","The world breaks everyone, and afterward, some are strong at the broken places.","I'll do whatever it takes to win games, whether it's sitting on a bench waving a towel, handing a cup of water to a teammate, or hitting the game-winning shot."," That's no reason to cry. One cries because one is sad. For example, I cry because others are stupid, and that makes me sad.","It’s a moo point. Its like a cow opinion; it doesnot matter. It is moo","The way to get started is to quit talking and begin doing.","It is during our darkest moments that we must focus to see the light."];
    var authors=["jackie Chan","Kevin James Durant","Abraham Lincoln","Lebron James","Edsger W. Dijkstra","Abelson and Sussman","Ernest Hemingway","Kobe Bean Bryant","Sheldon Cooper","Joey","Walt Disney","Aristotle"];
    //declare for display
    //var i = -1;
    fetch(quotes,authors);
    $('#next-quote').click(function(){
        fetch(quotes,authors);
        $("#quote").hide().fadeIn("slow");
        $("#author").hide().fadeIn("slow");
      });    
    function fetch(q,a)
    {
      var quoteNum = Math.floor(Math.random() * quotes.length);
        $("#quote").text('" ' + q[quoteNum] + ' "');
        $("#author").text("-" + a[quoteNum]);
        console.log(quoteNum)
      }
    
    });
    