Vue.component('app-icon', {

    template: '<span v-bind:class="cssClases" aria-hidden="true"></span>',
    props: ['img'],
    computed: {

        cssClases: function () {

        return 'fa fa-'+this.img;


        }

    }



});





var vm = new Vue ({

        el: '#app',

        methods: {

            createTask: function () {

                this.tasks.push({

                    description: this.new_task,
                    pending: true,
                    editing: false

                });

                this.new_task = '';
            },


            toggleStatus: function (task) {

                  task.pending = !task.pending;

            },

            editTask: function (task) {

                this.tasks.forEach(function (task) {

                    task.editing = false;


                });


                this.draft = task.description;

                task.editing = true;


            },


            updateTask: function (task){

                task.description = this.draft;

                task.editing = false;

            },


            discardTask: function (task){

                task.editing = false;
            },


            deleteTask: function (index){

                this.tasks.splice(index, 1);


            }



        },

        data: {

            draft: '',
            new_task: '',

            tasks: [
//
//                {
//                    description: '',
//                    pending: true,
//                    editing: false
//
//
//                },
//
//                {
//                    description: '',
//                    pending: true,
//                    editing: false
//
//
//                },
//
//                {
//                    description: '',
//                    pending: false,
//                    editing: false
//
//
//                }
//



            ]


        }



    });

    
