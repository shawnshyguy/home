var quotes=new Array()

//change the quotes if desired. Add/ delete additional quotes as desired.

quotes[0]='Flowey'

quotes[1]='Toriel'


var whichquote=Math.floor(Math.random()*(quotes.length))
document.write(quotes[whichquote])
