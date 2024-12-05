<?php

if (!isset($_POST['chk']) or $_POST['chk'] != 1) {
    // die("<script>
    // alert('잘못된 접근입니다.')
    // self.location.href='./stipulation.php'
    // </script>");

}
include 'inc_header.php';
?>
<main class="w-50 mx-auto border rounded-5 p-5">
    <h1 class="text-center">회원가입</h1>

    <div class="d-flex gap-2 align-items-end">
        <div class="flex-grow-1">
            <label for="f_id">아이디</label>
            <input type="email" class="form-control" id="f_id" placeholder="아이디를 입력해 주세요.">
        </div>
        <button class="btn btn-secondary">중복확인</button>
    </div>

    <div class="d-flex mt-4 gap-2 justify-content-between">
        <div class="flex-grow-1">
            <label for="f_password" class="form-label">비밀번호</label>
            <input type="password" class="form-control" id="f_password" placeholder="비밀번호를 입력해 주세요.">
        </div>
        <div class="flex-grow-1">
            <label for="f_password2" class="form-label">비밀번호</label>
            <input type="password" class="form-control" id="f_password2" placeholder="비밀번호를 입력해 주세요.">
        </div>
    </div>
    <div class="d-flex mt-4 gap-2 align-items-end">
        <div class="flex-grow-1">
            <label for="f_email">이메일</label>
            <input type="email" class="form-control" id="f_email" placeholder="이메일을 입력해 주세요.">
        </div>
        <button class="btn btn-secondary">이메일 중복확인</button>
    </div>

    <div class="d-flex gap-2 mt-4 align-items-end">
        <div>
            <label for="f_zipcode">우편번호</label>
            <input type="text" name="zipcode" id="zipcode" class="form-control" maxlength="5" minlength="5">
        </div>
        <button class="btn btn-secondary">우편번호찾기</button>
    </div>

    <div class="d-flex mt-4 gap-2 justify-content-between">
        <div class="flex-grow-1">
            <label for="f_addr1" class="form-label">주소</label>
            <input type="text" class="form-control" id="f_addr1" placeholder="">
        </div>
        <div class="flex-grow-1">
            <label for="f_addr2" class="form-label">상세주소</label>
            <input type="text" class="form-control" id="f_addr2" placeholder="">
        </div>
    </div>

    <div class="mt-4 d-flex gap-5">
        <div>
        <label for="f_photo" class="form-label">프로필 이미지</label>    
        <input type="file" name="profile" id="f_photo" class="form-control"></div>
        <img src="images/person.png" alt="profile image">
    </div>

    <div class="mt-4 d-flex gap-2">
        <button class="btn btn-primary w-50">가입확인</button>
        <button class="btn btn-secondary w-50">가입취소</button>

    </div>

</main>
<?php
include 'inc_footer.php'
    ?>