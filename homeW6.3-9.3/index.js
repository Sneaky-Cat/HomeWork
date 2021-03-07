function Student(selector){
    this.students = [];
    this.container = document.querySelector(selector);
    this.table = this.container.querySelector("table tbody");
    this.createButton = this.container.querySelector('form [type="submit"]');
}

Student.prototype.init = function(){
    this.getStudents();
    this.createButton.addEventListener("click", this.eventAddStudent.bind(this));
}

Student.prototype.eventAddStudent = function(event){
    event.preventDefault();

    let form = event.target.closest("form");
    let formData = new FormData(form);
    
    let student = {
        first_name: formData.get("firstname"),
        course: formData.get("course"),
        estimate: formData.get("estimate"),
        email: formData.get("email"),
        is_active: formData.get("is_active") !== null,
    };

    var self = this;
    self.sendAjax({
        url: "https://evgeniychvertkov.com/api/student/",
        method: "POST",
        body: student,
        success: function(response){
            if(response.is_success){
                self.students.push(response.student); // для задания 8.2 self.students.push(student); и всё будет работать, но студенты с сервера будут иметь email undefined.
                self.render();
            }
        }
    });
};

Student.prototype.eventRemove = function(event){
    var self = this;
    let tr = event.target.closest("tr");
    let index = parseInt(tr.getAttribute("data-index"));
    self.sendAjax({
        url: "https://evgeniychvertkov.com/api/student/" + this.students[index].id + "/",
        method: "DELETE",
        success: function(response){
            if(response.is_success){
                self.students.splice(index, 1);
                self.render();
                if(self.students.length == 0){
                    alert("Все студенты удалены");
                }
            }
        }
    });
};

Student.prototype.eventChangeStatus = function(event){
    var self = this;
    let tr = event.target.closest("tr");
    let index = parseInt(tr.getAttribute("data-index"));
    let student = this.students[index];
    student.is_active = event.target.checked;
    self.sendAjax({
        url: "https://evgeniychvertkov.com/api/student/",
        method: "PUT",
        body: student,
        success: function(response){
            if(!response.is_success){
                
            }
        }
    });
};

Student.prototype.eventChangeFirstname = function(event){
    var self = this;
    let td = event.target;
    tr = td.closest("tr");
    let index = parseInt(tr.getAttribute("data-index"));

    td.innerHTML = "";
    let input = document.createElement("INPUT");
    input.type = "text";
    input.addEventListener("keyup", this.eventNewFirstname.bind(this));
    this.eventBlur = this.eventBlurNewFirstname.bind(this); 
    input.addEventListener("blur", this.eventBlur);

    td.appendChild(input);
    input.focus();
};

Student.prototype.eventNewFirstname = function(event){
    event.preventDefault();

    let self = this;
    if(event.keyCode === 13){
        event.target.removeEventListener("blur", this.eventBlur);
        let firstname = event.target.value;

        let tr = event.target.closest("tr");
        let index = tr.getAttribute("data-index");

        let student = {
            id: self.students[index].id,
            first_name: firstname,
            course: self.students[index].course,
            estimate: self.students[index].estimate,
            is_active: self.students[index].is_active,
        };

        self.sendAjax({
            url: "https://evgeniychvertkov.com/api/student/",
            method: "PUT",
            body: student,
            success: function(response){
                if(response.is_success){
                    event.target.closest("td").innerHTML = firstname;
                    self.students[index].first_name = firstname;
                }
            }
        });
    }
};

Student.prototype.eventBlurNewFirstname = function(event){
    event.preventDefault();

    let tr = event.target.closest("tr");
    let td = event.target.closest("td");
    let index = tr.getAttribute("data-index");
    
    td.innerHTML = this.students[index].first_name;
};

Student.prototype.eventChangeCourse = function(event){
    var self = this;
    let td = event.target;
    tr = td.closest("tr");
    let index = parseInt(tr.getAttribute("data-index"));

    td.innerHTML = "";
    let input = document.createElement("INPUT");
    input.type = "text";
    input.addEventListener("keyup", this.eventNewCourse.bind(this));
    this.eventBlur = this.eventBlurNewCourse.bind(this);
    input.addEventListener("blur", this.eventBlur);

    td.appendChild(input);
    input.focus();
};

Student.prototype.eventNewCourse = function(event){
    event.preventDefault();

    let self = this;
    if(event.keyCode === 13){
        event.target.removeEventListener("blur", this.eventBlur);
        let course = event.target.value;

        let tr = event.target.closest("tr");
        let index = tr.getAttribute("data-index");

        let student = {
            id: self.students[index].id,
            first_name: self.students[index].first_name,
            course: course,
            estimate: self.students[index].estimate,
            is_active: self.students[index].is_active,
        };
        self.sendAjax({
            url: "https://evgeniychvertkov.com/api/student/",
            method: "PUT",
            body: student,
            success: function(response){
                if(response.is_success){
                    event.target.closest("td").innerHTML = course;
                    self.students[index].course = course;
                }
            }
        });
    }
};

Student.prototype.eventBlurNewCourse = function(event){
    event.preventDefault();

    let tr = event.target.closest("tr");
    let td = event.target.closest("td");
    let index = tr.getAttribute("data-index");

    td.innerHTML = this.students[index].course;
};

Student.prototype.eventChangeEstimate = function(event){
    var self = this;
    let td = event.target;
    tr = td.closest("tr");
    let index = parseInt(tr.getAttribute("data-index"));

    td.innerHTML = "";
    let input = document.createElement("INPUT");
    input.type = "text";
    input.addEventListener("keyup", this.eventNewEstimate.bind(this));
    this.eventBlur = this.eventBlurNewEstimate.bind(this);
    input.addEventListener("blur", this.eventBlur);

    td.appendChild(input);
    input.focus();
};

Student.prototype.eventNewEstimate = function(event){
    event.preventDefault();

    let self = this;
    if(event.keyCode === 13){
        event.target.removeEventListener("blur", this.eventBlur);
        let estimate = event.target.value;

        let tr = event.target.closest("tr");
        let index = tr.getAttribute("data-index");

        let student = {
            id: self.students[index].id,
            first_name: self.students[index].first_name,
            course: self.students[index].course,
            estimate: estimate,
            is_active: self.students[index].is_active,
        };
        self.sendAjax({
            url: "https://evgeniychvertkov.com/api/student/",
            method: "PUT",
            body: student,
            success: function(response){
                if(response.is_success){
                    event.target.closest("td").innerHTML = estimate;
                    self.students[index].estimate = estimate;
                }
            }
        });
    }
};

Student.prototype.eventBlurNewEstimate = function(event){
    event.preventDefault();

    let tr = event.target.closest("tr");
    let td = event.target.closest("td");
    let index = tr.getAttribute("data-index");

    td.innerHTML = this.students[index].estimate;
}

Student.prototype.render = function(){
    this.table.innerHTML = "";
    let naObj = this.eventStatistic();
    for(let i = 0; i < this.students.length; i++){
        let tr = document.createElement("TR");
        tr.setAttribute("data-index", i);

        if(this.students[i].estimate <= 3){
            tr.classList.add("not-active");
        }
        else if (this.students[i].estimate > 3 && this.students[i].estimate < 4){
            tr.classList.add("active");
        }
        else {
            tr.classList.add("veryActive");
        }
        
        
        

        

        let tdFio = document.createElement("TD");
        tdFio.innerHTML = this.students[i].first_name;
        tdFio.addEventListener("click", this.eventChangeFirstname.bind(this));
        tr.appendChild(tdFio);

        let tdCourse = document.createElement("TD");
        tdCourse.innerHTML = this.students[i].course;
        tdCourse.addEventListener("click", this.eventChangeCourse.bind(this));
        tr.appendChild(tdCourse);

        let tdEstimate = document.createElement("TD");
        tdEstimate.innerHTML = this.students[i].estimate;
        tdEstimate.addEventListener("click", this.eventChangeEstimate.bind(this));
        tr.appendChild(tdEstimate);

        let tdEmail = document.createElement("TD");
        tdEmail.innerHTML = this.students[i].email;
        tr.appendChild(tdEmail);

        let tdActive = document.createElement("TD");
        let checkbox = document.createElement("INPUT");
        checkbox.type = "checkbox";
        checkbox.checked = this.students[i].is_active;
        checkbox.addEventListener("change", this.eventChangeStatus.bind(this));
        tdActive.appendChild(checkbox);
        tr.appendChild(tdActive);

        let tdAction = document.createElement("TD");
        tdAction.innerHTML = "Удалить";
        tdAction.addEventListener("click", this.eventRemove.bind(this));
        tr.appendChild(tdAction);

        
        let tdnaCounter = document.createElement("TD");
        if (this.students[i].is_active === false){
            tdnaCounter.innerHTML = naObj[this.students[i].course].counter;
        }
        else {
            tdnaCounter.innerHTML = "Активен";
        }
        tr.appendChild(tdnaCounter);

        let avgEsimate = document.createElement("TD");
        if (naObj[this.students[i].course].avgEsimate <= 3){
            avgEsimate.classList.add("not-active");
        }
        else if (naObj[this.students[i].course].avgEsimate > 3 && naObj[this.students[i].course].avgEsimate < 4){
            avgEsimate.classList.add("active");
        }
        else {
            avgEsimate.classList.add("veryActive");
        }
        avgEsimate.innerHTML = naObj[this.students[i].course].avgEsimate.toFixed(1);
        tr.appendChild(avgEsimate);
       

        this.table.appendChild(tr);

        
    }
         
};

Student.prototype.addStudent = function(student){
    var self = this;
    self.sendAjax({
        url: "https://evgeniychvertkov.com/api/student/",
        method: "POST",
        body: student,
        success: function(response){
            if(response.is_success){
                self.students.push(student);
                self.render();
            }
        }
    });
};

Student.prototype.getStudents = function(){
    var self = this;
    self.sendAjax({
        url: "https://evgeniychvertkov.com/api/student/",
        method: "GET",
        success: function(response){
            if(response.is_success){
                self.students = response.students;
                self.render();
            }
        }
    });
};

Student.prototype.eventStatistic = function(){
    var self = this;
    let totalCounter = 0;
    let student = {};
    for (i = 0; i<this.students.length; i++){
        if (this.students[i].is_active === false){
            ++totalCounter;
        }
        if (student[this.students[i].course] === undefined){
            student[this.students[i].course] = {
                course: this.students[i].course,
                counter: 0,
                sumEstimate: 0,
                counterEstimate: 0
            }
        }
        if (this.students[i].is_active === false){
            student[this.students[i].course].counter += 1;
        }

        if (this.students[i].course === student[this.students[i].course].course){
            student[this.students[i].course].sumEstimate += this.students[i].estimate;
            student[this.students[i].course].counterEstimate += 1;
        }
        
    }
    for (let key in student){
        student[key].avgEsimate = student[key].sumEstimate / student[key].counterEstimate;
        
    }
    document.getElementById("totalNAStudents").innerHTML = totalCounter;
    return student;
}


Student.prototype.sendAjax = function(data){
    var self = this;
    var xhr = new XMLHttpRequest();

    xhr.open(data.method, data.url, true);

    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
    xhr.setRequestHeader("X-Authorization-Token", "170c5197-72a1-11eb-b8cf-001b21474ee8");

    if(data.body !== undefined){
        xhr.send(JSON.stringify(data.body));
    }else{
        xhr.send();
    }

    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) return;
        if (xhr.status == 200) {
            let response = JSON.parse(xhr.response);
            data.success(response);
        }
    }
}

window.onload = function(){
    (new Student(".students")).init();
}