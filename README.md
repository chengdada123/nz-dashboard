1、安装git


apt install git -y

2、克隆代码并进入文件夹执行权限


git clone https://github.com/chengdada123/nz-dashboard.git && cd nz-dashboard && chmod +x main

当然你得编辑配置文件：
配置文件在data文件夹。
其中github id、clientid和clientsecret需要在GitHub获取。

3、 执行



./main



其中main 为哪吒面板的二进制文件，分为amd、arm、alpine、freebsd

谢谢！
