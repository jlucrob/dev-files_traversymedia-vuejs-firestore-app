<template>
  <div id="dashboard">
    <ul class="collection with-header">
      <li class="collection-header"><h4>Employees</h4></li>
      <li v-for="employee in employees" v-bind:key="employee.id" class="collection-item">
        <div class="chip">{{employee.dept}}</div>{{employee.employee_id}}: {{employee.name}}
        <router-link class="secondary-content" v-bind:to="{name: 'view-employee', params: {employee_id: employee.employee_id}}">
          <i class="fa fa-eye fa-2x"></i>
        </router-link>
      </li>
    </ul>
    <div class="fix-action-btn">
      <!-- <router-link to="/traversymedia-vuejs-firestore-app/new" class="btn-floating btn-large red"> -->
        <router-link to="/new" class="btn-floating btn-large red">
        <i class="fa fa-plus"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import db from './firebaseInit.js';
export default {
  name:'dashboard',
  data(){
    return{
      employees: []
    }
  },
  created(){
    //Get employees from DB and order them by department
    db.collection('employees').orderBy('dept').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const data = {
          'id': doc.id,
          'employee_id': doc.data().employee_id,
          'name': doc.data().name,
          'dept': doc.data().dept,
          'position': doc.data().position
        };
        this.employees.push(data);
      });
    });
  }
}
</script>

<style scoped>
#dashboard{
  max-width: 500px;
  margin: 0 auto;
}

/*li.collection.item{
  padding: 10px 20px !important;
}*/
</style>
