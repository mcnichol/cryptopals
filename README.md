# [Cryptopals Challenge](https://cryptopals.com) Solutions w/Explanation

## Motivation:
The purpose of this is to provide an interactive solution alongside a blog like explanation of how I arrived at each solution for the [Cryptopals](https://cryptopals.com/) challenges. 

The Cryptopals Challenges were built in 2013 by:
* Thomas Ptacek (@tqbf)
* Sean Devlin (@spdevlin)
* Alex Balducci (@iamalexalright)
* Marcin Wielgoszewski (@marcinw)

The background/purpose can be seen at the [Cryptopals Homepage FAQ section](https://cryptopals.com/) as well as [Maciej Ceglowski introductory write-up](https://blog.pinboard.in/2013/04/the_matasano_crypto_challenges/).  


Interested in why I'm doing yet-another-blog-covering-blog...I was given something beyond the scope of this...a task to show cloud-portability of applications across leading IaaS's (AWS, GCP, Azure, on-prem vSphere)...in my head I know how simple this is, and when using Heroku inspired [buildpacks](https://buildpacks.io/) it feels like cheating, but I think the simplicity is lost on people amidst a myriad of choices.

Buildpacks having been built by Heroku in 2011 for enabling [polyglot application platforms](https://blog.heroku.com/polyglot_platform), it was a ground-breaking step in letting application developers move their workloads to various platforms, honoring 12 Factor Application patterns and preparing development, security, and infrastructure teams for todays development and tomorrows maintenance and additional functionality. And as a by-product of a well designed system, it's incredibly portable leaving you in the drivers seat of your applications future infrastructure needs.

The middleware is abstracted from your application to the container it is running on.  This container can be fully managed leaving you to focus on application features using something like [Cloud Foundry's Diego Container Orchestrator]() (Considered a [PaaS](https://searchcloudcomputing.techtarget.com/definition/Platform-as-a-Service-PaaS)) or you can take over finer grained controls in the process using something like [Googles Kubernetes](https://cloud.google.com/kubernetes/) (Considered a [CaaS](https://searchitoperations.techtarget.com/definition/Containers-as-a-Service-CaaS)).

**</Rant>**

All this explanation so that I can explain the kicker. This is one of those unique moments where the stars align and passion-project meets business value and showing cloud portability.  

What we will end up having is an interactive user-interface to test our Cryptopals solutions, a small write-up explaining each set solution, a backend driving the logic of the solution written in a few popular languages, and each engine running in AWS, Azure, GCP, and vSphere. I will provide some logic in the UI enabling backend selection for calls to be made to the chosen IaaS based Engine.
