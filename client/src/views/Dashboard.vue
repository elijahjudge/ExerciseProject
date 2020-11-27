<template>
  <section>
    <b-tabs>
      <b-tab-item label="Table">
        <b-table
          :data="data"
          :columns="columns"
          :checked-rows.sync="checkedRows"
          :is-row-checkable="row => true"
          :checkbox-position="left"
          checkable
        >
          <template >
              
              
          </template>

          <template v-for="column in columns">
            <b-table-column :key="column.id" v-bind="column">
              <template
                v-if="column.searchable && !column.numeric"
                slot="searchable"
                slot-scope="props"
              >
                <b-input
                  v-model="props.filters[props.column.field]"
                  placeholder="Search..."
                  size="is-small"
                />
              </template>
              <template v-slot="props">
                {{ props.row[column.field] }}
              </template>
            </b-table-column>
          </template>
        </b-table>
      </b-tab-item>

      <b-tab-item label="Selected">
        <pre>{{ checkedRows }}</pre>
      </b-tab-item>
    </b-tabs>
  </section>

  
</template>

<script>
import { modifyexercise } from "@/models/modifyexercise";
export default {
  data() {
    return {
      data: modifyexercise.state.users,
      checkedRows: [],
      columns: [
        {
          field: "id",
          label: "ID",
          width: "25",
          numeric: true,
          searchable: true

          
        },
        {
          field: "name",
          label: "Full Name",
          width: "100",
          searchable: true
        },
        {
          field: "handle",
          label: "Username",
          width: "100",
          searchable: true
        },
        {
          field: "loggedIn",
          label: "Logged in",
          width: "100",
          searchable: true
        },
        {
          field: "admin",
          label: "Admin",
          width: "50",
          searchable: true
        }
      ]
    };
  }
};
</script>