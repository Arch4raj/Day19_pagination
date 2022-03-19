var studentsdata = new Array();
var pageList = new Array();
var currentPage = 1;
var numberPerPage = 10;
var numberOfPages = 10;

var objdata=[
    {
      "id": "1",
      "name": "Lura Senger",
      "email": "Xander_Collier@yahoo.com"
    },
    {
      "id": "2",
      "name": "Wilburn Weber",
      "email": "Bennett_Kreiger11@yahoo.com"
    },
    {
      "id": "3",
      "name": "Tyrique Hahn",
      "email": "Juston.Altenwerth@yahoo.com"
    },
    {
      "id": "4",
      "name": "Lenny Bailey",
      "email": "Guiseppe_Hegmann@yahoo.com"
    },
    {
      "id": "5",
      "name": "Vladimir Keeling",
      "email": "Louisa_Walsh18@hotmail.com"
    },
    {
      "id": "6",
      "name": "Kellie Crona",
      "email": "Chandler_Abernathy@yahoo.com"
    },
    {
      "id": "7",
      "name": "Carolina White",
      "email": "Royal50@hotmail.com"
    },
    {
      "id": "8",
      "name": "Alfredo Conn",
      "email": "Clarabelle34@hotmail.com"
    },
    {
      "id": "9",
      "name": "Stan Shanahan",
      "email": "Lamar.McClure@hotmail.com"
    },
    {
      "id": "10",
      "name": "Marvin Fay",
      "email": "Osbaldo58@hotmail.com"
    }]
    console.log(objdata[0])
  function makeList() {
      for (x = 0; x < 10; x++)
          studentsdata.push(objdata[x]);
  
      numberOfPages = getNumberOfPages();
  }
  
  function getNumberOfPages() {
      return Math.ceil(studentsdata.length / numberPerPage);
  }
  function nextPage() {
      currentPage += 1;
     
   loadList();
  }
  
  function previousPage() {
      currentPage -= 1;
      
    
      loadList();
  }
  
  function firstPage() {
      currentPage = 1;
      
      loadList();
  }
  
  function lastPage() {
      currentPage = numberOfPages;
   
      loadList();
  }
  function loadList() {
      var begin = ((currentPage - 1) * numberPerPage);
      var end = begin + numberPerPage;
  
      pageList = studentsdata.slice(begin, end);
      
      loadList();
     
  }
  
  function load() {
  makeList();
  loadList();
  }