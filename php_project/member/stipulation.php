<?php include 'inc_header.php';?>

    <main class="p-5 border rounded-5">
      <h1 class="text-center">회원 약관 및 개인정보 취급방침 동의</h1>
      <h4 class="mt-3">회원 약관</h4>
      <textarea name="" id="" cols="30" rows="10"
        class="form-control">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quia modi quis itaque, voluptates officiis possimus excepturi iusto placeat. Laboriosam modi voluptate consequuntur temporibus tenetur nemo, voluptas totam eius id, ipsa ullam assumenda nisi fugit optio quibusdam debitis vitae. Laudantium similique corrupti cum eius nemo velit beatae sed laboriosam modi, quas nihil libero iste quisquam quam ducimus aperiam tempora doloribus voluptatum fugit maxime totam! Vero incidunt debitis, molestias magnam aliquam temporibus iste voluptate illo, a, sequi error optio vel beatae. Deserunt ipsam perferendis, nemo temporibus iure repellendus eveniet vero quisquam natus repellat fuga et nostrum sapiente dolor, deleniti sequi alias eos sed doloremque dignissimos eaque consequuntur totam? Sequi iure vitae debitis fugiat! Laudantium accusantium labore cumque neque pariatur officia nam error ullam, minima sunt ea unde, quibusdam totam dolore quos tempora possimus consequatur debitis quia nulla vero dolor delectus assumenda? Ipsum molestias harum rem ipsa error corporis deserunt eveniet voluptate odit impedit deleniti quibusdam, eum distinctio excepturi. Hic nisi molestiae cupiditate reiciendis! Dolorum quaerat possimus neque quisquam officiis facilis, eveniet, corporis harum alias accusantium aut ducimus nostrum minus! Placeat rerum, asperiores minima veritatis commodi aspernatur aut impedit amet numquam nemo aperiam et totam vitae id atque odit repellendus laboriosam pariatur blanditiis reiciendis! Eius in id error? Nemo odio iste veniam ad illo atque maxime ut sunt reiciendis facilis in quae omnis id accusamus quo error eos minus dolore, minima cupiditate perferendis necessitatibus reprehenderit tempore. Magni sit tenetur recusandae iste atque maxime deserunt ex debitis, similique saepe veniam a? Facere asperiores doloremque quia optio neque repudiandae molestias laudantium eaque ipsum minima tempora consequuntur non modi amet repellendus possimus qui facilis a, consequatur ut incidunt quidem saepe laboriosam! Dolores nemo, harum esse eligendi eaque perspiciatis neque obcaecati tempore praesentium totam tempora! Fuga rem facilis harum voluptates vel! Qui eos numquam doloremque quia.</textarea>
      <div class="form-check mt-2">
        <input class="form-check-input" type="checkbox" value="1" id="chk_member1">
        <label class="form-check-label" for="chk_member1">
          위 약관에 동의하시겠습니까?
        </label>
      </div>


      <h4 class="mt-3">개인정보 취급방침</h4>
      <textarea name="" id="" cols="" rows="10"
        class="form-control">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quia modi quis itaque, voluptates officiis possimus excepturi iusto placeat. Laboriosam modi voluptate consequuntur temporibus tenetur nemo, voluptas totam eius id, ipsa ullam assumenda nisi fugit optio quibusdam debitis vitae. Laudantium similique corrupti cum eius nemo velit beatae sed laboriosam modi, quas nihil libero iste quisquam quam ducimus aperiam tempora doloribus voluptatum fugit maxime totam! Vero incidunt debitis, molestias magnam aliquam temporibus iste voluptate illo, a, sequi error optio vel beatae. Deserunt ipsam perferendis, nemo temporibus iure repellendus eveniet vero quisquam natus repellat fuga et nostrum sapiente dolor, deleniti sequi alias eos sed doloremque dignissimos eaque consequuntur totam? Sequi iure vitae debitis fugiat! Laudantium accusantium labore cumque neque pariatur officia nam error ullam, minima sunt ea unde, quibusdam totam dolore quos tempora possimus consequatur debitis quia nulla vero dolor delectus assumenda? Ipsum molestias harum rem ipsa error corporis deserunt eveniet voluptate odit impedit deleniti quibusdam, eum distinctio excepturi. Hic nisi molestiae cupiditate reiciendis! Dolorum quaerat possimus neque quisquam officiis facilis, eveniet, corporis harum alias accusantium aut ducimus nostrum minus! Placeat rerum, asperiores minima veritatis commodi aspernatur aut impedit amet numquam nemo aperiam et totam vitae id atque odit repellendus laboriosam pariatur blanditiis reiciendis! Eius in id error? Nemo odio iste veniam ad illo atque maxime ut sunt reiciendis facilis in quae omnis id accusamus quo error eos minus dolore, minima cupiditate perferendis necessitatibus reprehenderit tempore. Magni sit tenetur recusandae iste atque maxime deserunt ex debitis, similique saepe veniam a? Facere asperiores doloremque quia optio neque repudiandae molestias laudantium eaque ipsum minima tempora consequuntur non modi amet repellendus possimus qui facilis a, consequatur ut incidunt quidem saepe laboriosam! Dolores nemo, harum esse eligendi eaque perspiciatis neque obcaecati tempore praesentium totam tempora! Fuga rem facilis harum voluptates vel! Qui eos numquam doloremque quia.</textarea>
      <div class="form-check mt-2">
        <input class="form-check-input" type="checkbox" value="1" id="chk_member2">
        <label class="form-check-label" for="chk_member2">
          위 개인정보 취급 방침에 동의하시겠습니까?
        </label>
      </div>

      <div class="mt-4 d-flex justify-content-center gap-1">
        <button class="btn btn-primary w-50" id="btn_member">회원가입</button>
        <button class="btn btn-secondary w-50" id="btn_cancel">가입취소</button>
      </div>

      <form method="post" name="stipulation_form" action="member_input.php" style="display:none">
        <input type="hidden" name="chk" value="0">
      </form>
    </main>

    <?php include 'inc_footer.php'?>


