myFunction([
	{
	"shape": [
	  
	  
		{
		  "shapeName":"Rectangle",
		  "input":[ "length", "breadth"],
		  "output":[ "Area", "Perimeter" ],
		  "formula":["length*breadth","2*(length+breadth)"]
		},
	 
		{
			"shapeName":"Square",	
		  "input":[ "length"],
		  "output":[ "Area", "Perimeter" ],
		  "formula":["length*length","4*length"]
		}  ,
	 
		{
			"shapeName":"3d",	
		  "input":[ "length", "breadth","height"],
		  "output":[ "Area", "Perimeter" ],
		  "formula":["length*breadth*height","2*(length+breadth+height)"]
		}  ,
	 
		{
			"shapeName":"Triangle",	
		  "input":[ "base","height"],
		  "output":[ "Area" ],
		  "formula":["0.5*base*height"]
		}  
	
	]
  }
])



