1、安装git


apt install git -y 
或者:apk add git
或者:yum install git -y

2、克隆代码并进入文件夹执行权限


git clone https://github.com/chengdada123/nz-dashboard.git && cd nz-dashboard && chmod +x main

当然你得编辑配置文件：
配置文件在data文件夹。
其中github id、clientid和clientsecret需要在GitHub获取。

3、 执行



./main

如果你要后台运行，可以执行nohup ./main &
或者利用screen





其中main 为哪吒面板的二进制文件，分为amd、arm、alpine、freebsd等版本，根据您自己的系统自行选择运行。

谢谢！

[![Powered by DartNode](https://dartnode.com/branding/DN-Open-Source-sm.png)](https://dartnode.com "Powered by DartNode - Free VPS for Open Source")


