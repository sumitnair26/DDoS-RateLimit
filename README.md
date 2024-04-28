
# Why rate limitting

1.  **Preventing Overload**: Rate limiting controls how often a user or system can make requests to a service. This helps prevent overuse of resources, ensuring that the system remains available and responsive for all users. For example, rate limiting can stop a single user from making thousands of login attempts in a minute, which could otherwise degrade service for others.

2.  **Mitigating Abuse**: Without rate limiting, an application could be more susceptible to abuse such as brute force attacks on passwords or spamming behavior. By limiting how often someone can perform an action, it reduces the feasibility of such attacks.

3.  **Managing Traffic**: In high-traffic scenarios, like ticket sales for a popular event, rate limiting can help manage the load on a server, preventing crashes and ensuring a fairer distribution of service like bandwidth or access to the purchasing system.

4.  **DDoS Protection**: A DDoS attack involves overwhelming a site with a flood of traffic from multiple sources, which can make the website unavailable. DDoS protection mechanisms detect unusual traffic flows and can filter out malicious traffic, helping to keep the service operational despite the attack.

# Common place to add rate limits

Ref - [https://thehackernews.com/2016/03/hack-facebook-account.html](https://thehackernews.com/2016/03/hack-facebook-account.html)

When you allow a user to `reset their password` using an OTP from their email, the following endpoint should be rate limited heavily

<img width="1434" alt="Screenshot 2024-04-26 at 13 22 17" src="https://github.com/sumitnair26/DDoS-RateLimit/assets/24470385/17c72413-ae53-48a2-a5c8-b8859e1daf0c">

<img width="1434" alt="Screenshot 2024-04-26 at 13 22 58" src="https://github.com/sumitnair26/DDoS-RateLimit/assets/24470385/a662a083-1514-494e-b27e-7025b2c5e780">

# Captcha

Captchas are a great-sh solution to making sure the request was sent by a human and not by a machine

![image](https://github.com/sumitnair26/RateLimiting-and-Captcha/assets/24470385/e7974edd-3392-4675-92f0-552a747989a6)



