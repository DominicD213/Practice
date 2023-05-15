    document.forms[0].addEventListener("submit", function details(e) {
        e.preventDefault();

        let fname = document.getElementById("First-Name").value;
        let lname = document.getElementById("Last-Name").value;
        let course= document.getElementById("Course").value;
        let section = document.getElementById("Section").value;
        let role = document.getElementById("Role").value;

        let person = {
            firstname: fname,
            lastname: lname,
            course: course,
            section: section,
            role :role,
            
            pageoutput: function () {
                let srcout = document.getElementById("output_prs");
                srcout.innerHTML =`${this.firstname} ${this.lastname} has the role of ${this.role} in ${this.class} section ${this.section}`;

            }
        };
        person.pageoutput();
    });