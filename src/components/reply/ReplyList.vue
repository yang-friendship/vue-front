<template>
  <div>
    <br>
    <table border="1">
      <th>번호</th>
      <th>내용</th>
      <th>작성자</th>
      <th>작성시간</th>
      <template v-for="reply in replies" >
        <tr :key="reply.id">
          <td>{{reply.id}}</td>
          <td>{{reply.content}}</td>
          <td>{{reply.writer.nickname}}</td>
          <td>{{reply.register_date_time}}</td>
        </tr>
        <template v-for="reply in reply.children" >
          <tr :key="reply.id">
            <td>{{reply.id}}</td>
            <td> ↳ {{reply.content}}</td>
            <td>{{reply.writer.nickname}}</td>
            <td>{{reply.register_date_time}}</td>
          </tr>
        </template>
      </template>
    </table>
    <AddReply />
  </div>
</template>

<script>
import AddReply from "./AddReply";
export default {
  name: "ReplyList",
  components: {AddReply},
  props:['replies']
}
</script>

<style scoped>

</style>