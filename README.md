# DB設計

## users
### association
- has_many messages
- has_many groups_users
- has_many groups through: :groups_users

|Column|Type|Option|
|:---|:---|:---|
|id|integer|
|name|string|null: false|
|e-mail|string|unique: true|
|password|string|null: false|
|password_confirmation|string|null: false|
|timestamp|

## messgages
### association
- belongs_to user
- belongs_to group

|Column|Type|option|
|:---|:---|:---|
|body|text|  
|image|string|
|user_id|references|null: false,foreign_key: true|
|group_id|references|null: false,foreign_key: true|
|timestamp|

## groups
### association
- has_many messages
- has_many group_users
- has_many users thorugh: :group_users

|Column|Type|Option|
|:---|:---|:---|
|id|integer|
|name|string|null: false|

## group_users
### association
- belongs_to user
- belongs_to group

|Column|Type|Option|
|:---|:---|:---|
|id|integer|  
|group_id|references|null: false,foreign_key: true|
|user_id|references|null: false,foreign_key: true|
