using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace Reat_Time_Simple_Chat_RignalR.Hubs
{
    public class Data_Handler:Hub
    {
        public async Task send_message(string UserName, string UserMessage)
        {
            await Clients.All.SendAsync("RecivedMessage", UserName, UserMessage);
        }
    }
}
