<template>
  <div>
    <div class="flex flex-row justify-center" style="margin-top: 360px" id="howworks">
      <h1 class="text-green text-4xl">How it works..?</h1>
    </div>
    <div class="timeline">
      <div class="circle"></div>
      <ul>
        <li data-aos-duration="3000" data-aos="fade-up">
          <em>Step 1</em>
          <p>
            To register and get pool 0 in the System, simply send 0.1 ETH to the smart contract.
            Once you register you can buy a pool for profit, remember that the registration pool is recovered, you never lose money.
          </p>
        </li>
        <li data-aos-duration="3000" data-aos="fade-up">
          <em>Step 2</em>
          <p>SIGN IN TO THE ACCOUNT, using only the Ethereum wallet number (without password). The password is not needed, since your account
               is in a smart contract, and not on the site. Therefore, your account cannot be blocked or deleted from the System even by the site administration. And your Ethereum wallet can not be hacked or changed to another.</p>
        </li>
        <li data-aos-duration="3000" data-aos="fade-up">
          <em>Step 3</em>
          <p>
            Send your referral link to your friends and receive 40% on registration and 10% for each package that a user you referred purchases a package.
          </p>
        </li>
        <li data-aos-duration="3000" data-aos="fade-up">
          <em>Step 4</em>
          <p>
            Earn from 1 to 8% percent of your referral levels up to 10 levels per registration and for buying a pool, every time they buy a pool or
             renew they are also delivered.
          </p>
        </li>
        <li data-aos-duration="3000" data-aos="fade-up">
          <em>Step 5</em>
          <p>
            Automatically receive payments to your ethereum wallet, without intermediaries or who controls the payments. No need to accept transactions
             or request payments. The funds directly come to your wallet.
          </p>
        </li>
        <li data-aos-duration="3000" data-aos="fade-up">
          <em>Step 6</em>
          <p>
            Nobody can close your account, to stop payments or make changes to the system, since the smart contract is loaded into the Ethereum network.
             It can't be deleted or changed. Referrals can be invited without a website and referral links but directly into a smart contract. Therefore,
              the error404 System will exist as long as the cryptocurrency exist, and the cryptocurrency will exist as long as the Internet exist.
          </p>
        </li>
      </ul>
      <div class="circle"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  position: relative;
}
.timeline {
  font: normal bold 16px/1.6rem "Open Sans Condensed";
  padding: 1rem;
}
.timeline .circle {
  background: #aaa;
  border: 0.5rem solid #666;
  border-radius: 100%;
  height: 2.25rem;
  margin: auto;
  width: 2.25rem;
  vertical-align: middle;
}
.timeline .circle:hover {
  background: #0f0;
  transition: 0.8s;
}
.timeline ul {
  margin: 0;
  padding: 0;
}
.timeline em {
  color: #666;
  display: block;
  font-weight: bold;
}
.timeline li {
  border: 0 solid #aaa;
  color: #fff;
  font-family: "Open Sans";
  list-style-type: none;
  text-transform: uppercase;
  padding: 1rem 2rem;
  width: calc(50% + 1px);
}
.timeline .li:after:hover {
  background: #0f0;
  transition: 0.8s;
}
.timeline li:after {
  background: #aaa;
  border-radius: 100%;
  content: "";
  display: inline-block;
  height: 1rem;
  position: absolute;
  right: calc(-0.5rem - 1px);
  width: 1rem;
}

.timeline li:nth-child(even):after {
  left: calc(-0.5rem - 1px);
}
.timeline li:nth-child(odd) {
  border-right-width: 2px;
  text-align: right;
}
.timeline li:nth-child(even) {
  border-left-width: 2px;
  left: calc(50% - 1px);
}
</style>
