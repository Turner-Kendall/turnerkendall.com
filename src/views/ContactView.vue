<template>

 <section class="contact-section">

  <form class="contact-form" action="https://api.web3forms.com/submit" method="POST">

    <input type="hidden" name="access_key" value="ac31ec4b-b4e6-4f1a-9dcc-3b0701992210" />
    <input type="hidden" name="subject" value="New Contact Form Submission from Turner Kendall" />
    <input type="checkbox" name="botcheck" class="hidden" style="display: none;">
    <input type="hidden" name="from_name" value="turnerkendall.com" />

    <div class="form-group-container">
        <div class="form-group">
            <label for="name" class="form-label">Name</label>
            <input id="name" name="name" class="form-input" placeholder="Your name" type="text" />
        </div>
        
        <div class="form-group-inline">
            <div class="form-group">
                <label for="email" class="form-label">Email</label>
                <input id="email" name="email" class="form-input" placeholder="Your email" type="email" />
            </div>
            <div class="form-group">
                <label for="phone" class="form-label">Phone</label>
                <input id="phone" name="phone" class="form-input" placeholder="+1 (234) 56789" type="text" />
            </div>
        </div>
  
        <div class="form-group">
            <label for="message" class="form-label">Message</label>
            <textarea class="form-textarea" id="message" name="message" placeholder="Your message"></textarea>
        </div>
    </div>
    <button class="form-submit" type="submit">Send Message</button>
  </form>

</section>
</template>

<style scoped>
.contact-section {
  width: 100%;
  max-width: 40rem;
  margin-left: auto;
  margin-right: auto;
  padding: .33rem 1rem 3rem 1rem;
}


.form-group-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-group-inline {
  display: flex;
  gap: 15px;
}

.form-group {
  flex: 1;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-label {
  margin-bottom: 0.5rem;
}

.form-input,
.form-textarea {
  padding: 0.5rem;
  border: 1px solid #ffffff18;
  background-color: rgba(0, 0, 0, 0.276);
  display: flex;
  height: 2.5rem;
  width: 100%;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #6b7280;
}

.form-input::placeholder,
.form-textarea::placeholder,
.form-textarea:focus-visible {
  color: #6b7280;
}

.form-input:focus-visible,
.form-textarea:focus-visible {
  outline: 2px solid #91a7de67;
  outline-offset: 2px;
}

.form-textarea {
  min-height: 120px;
}

.form-submit {
  width: 100%;
  margin-top: 1.2rem;
  background-color: #1d242f;
  color: #7c869e;
  padding: 13px 5px;
  border-radius: 0.375rem;
  border: none!important;
}

.form-submit:hover {
    color: #f2f2f2;
    background-color: #291d2f;
    cursor: pointer;
}

</style>