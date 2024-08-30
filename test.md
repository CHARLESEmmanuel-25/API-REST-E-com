# Prise en compte des failles de sécurité OWSAP

## 01-Broken-access-control

## 02-Cryptographic Failures

A mettre en place :

- Chiffrement des données ([bcrypt](https://www.npmjs.com/package/bcrypt))

## 03-Injection

A mettre en place :

- Utiliser les fonctionnalités du client database pour effectuer les requêtes et ne pas mettre les données en brut dans les requêtes ;
- Effectuer un contrôle sur les données ([Joi](https://www.npmjs.com/package/joi)) et les refuser si elles ne correspondent pas au format attendu

## 04-Insecure Design

Il s'agit d'une conception générale de l'application. Elle doit être réfléchi pour empêcher toute sorte de faille dans la logique de celle-ci.

A mettre en place :

- Ne pas donner d'informations sur la raison de l'échec lors d'une tentative de connexion ;
- Ne pas utiliser un système de récupération de mot de passe qui peut être accessible par autre que l'utilisateur en question ou dont les éléments de réponse peuvent être connu de tous mais plutôt utiliser un code de vérification généré automatiquement et ayant une durée de validité courte ([otp-generator](https://www.npmjs.com/package/otp-generator?activeTab=readme))
- Utiliser une confirmation à envoyer par email ([Nodemailer](https://www.nodemailer.com/)) lors d'une nouvelle inscription (pour éviter qu'une personne tierce utiise une adresse qui ne lui appartient pas pour effectuer une inscription)
- 

## 05-Security Misconfiguration

Avoir mis en place de mauvais choix de configuration de sécurité.

A mettre en place :

- Lorsque la personne se déconnecte de la plateforme, le JWT et le refresh token sont détruits au niveau du serveur
- Seules les routes et les rôles utilisables et ayant un but d'être utilisé doivent être présents. Toute route ou rôle n'étant pas utilisé n'a aucune raison d'être dans l'application
- Configurer les options et paramètres des modules/paquets utilisés de la bonne manière et en prenant en considération les besoins et particularités de l'application
- Ne pas coder les valeurs de sécurité en brut dans l'application et les mettre en tant que variables d'environnement (non pas dans un .env mais au sein même de la configuration de la machine serveur)
- Garder à jour les systèmes de sécurité de l'application
- Ne pas stocker des mot de passe ou des données sensible accessible côté navigateur

## 06-Vulnerable and Outdated Components

A mettre en place :

- Vérifier la version et la vulnérabilité des composants/paquets/modules utilisés ainsi que leur dépendances
- S'informer et corriger tant que possible les nouvelles vulnérabilités
- Supprimer les dépendances inutilisées, les fonctionnalités, les composants, les fichiers et la documentation inutiles. Pour se faire on peut utiliser un analyseur de dépendance ([depcheck](https://www.npmjs.com/package/depcheck))

## 07-Identification and Authentication Failures

Mettre en place un système d'authentification robuste.

A mettre en place :

- Obliger l'utilisateur de renseigner un mot de passe respectant un certain schéma (min 12 caractères, min 2 chiffres, min 1 symbole)
- Ne pas stocker le mot de passe en dur mais utiliser un système de chiffrage utilisant un algorithme de hachage approuvé
- Interdir la connexion après un certain nombre de tentative pendant une certaine durée
- 

## 10-Server-Side Request Forgery (SSRF)