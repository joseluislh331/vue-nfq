var vueNfq = new Vue({
    el: '#app',
    data: {
        employees: [
            {
               "id":1,
               "name":"Alba",
               "image":"images/employees/alba.jpg",
               "type":"front"
            },
            {
               "id":2,
               "name":"Alberto",
               "image":"images/employees/alberto.jpg",
               "type":"front"
            },
            {
               "id":3,
               "name":"Ana",
               "image":"images/employees/ana.jpg",
               "type":"back"
            },
            {
               "id":4,
               "name":"Carlos",
               "image":"images/employees/carlos.jpg",
               "type":"python"
            },
            {
               "id":5,
               "name":"Clara",
               "image":"images/employees/clara.jpg",
               "type":"front"
            },
            {
               "id":6,
               "name":"David",
               "image":"images/employees/david.jpg",
               "type":"front"
            },
            {
               "id":7,
               "name":"Eduardo",
               "image":"images/employees/eduardo.jpg",
               "type":"back"
            },
            {
               "id":8,
               "name":"Héctor",
               "image":"images/employees/hector.jpg",
               "type":"front"
            },
            {
               "id":9,
               "name":"José Luis",
               "image":"images/employees/jose.jpg",
               "type":"front"
            },
            {
               "id":10,
               "name":"Juan Manuel",
               "image":"images/employees/juanma.jpg",
               "type":"back"
            },
            {
               "id":11,
               "name":"Mishell",
               "image":"images/employees/mishell.jpg",
               "type":"python"
            },
            {
               "id":12,
               "name":"Olga",
               "image":"images/employees/olga.jpg",
               "type":"front"
            },
            {
               "id":13,
               "name":"Verónica",
               "image":"images/employees/veronica.jpg",
               "type":"front"
            }
        ],
        typeColor: {
            "front": "#78C850",
            "back": "#A040A0",
            "python": "#F08030"
        }
    },
    methods: {
        removeEmployee(id) {
            this.employees = this.employees.filter(employee => employee.id !== id);
        }
    }
});