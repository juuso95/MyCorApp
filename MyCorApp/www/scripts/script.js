
    //TIME
    var d = new Date();
    document.getElementById("date").innerHTML = d.toDateString();

    //ADDING TASK with TIME
    function myFunction() {

        var td = document.createElement("TD");
        var tr = document.createElement("TR");
        td.setAttribute('id', 'td');
        tr.setAttribute('id', 'tr');

        var input = document.getElementById("myText");
        td.innerHTML = "<b>" + input.value + "</b>" + " | " + d.toDateString();
        input.value = "";

        document.getElementById("list").appendChild(tr).appendChild(td);


    }

    //REMOVING TASKS
    function myFunction1() {

        try {

            var td = document.getElementById("object");
            td.parentNode.removeChild(td);

        }

        catch (err) {

            var td = document.getElementById('td', 'tr');
            td.parentNode.removeChild(td);


        }
    }
