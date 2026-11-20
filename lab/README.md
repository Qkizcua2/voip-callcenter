# Lab guide — Call Center on Asterisk

Files in this folder are the definitive configuration used by the practical demonstration
(section 4 of the project website). They are ready to copy into the Ubuntu VM.

## 1. Install the server (inside the Ubuntu VM)

```bash
sudo apt update
sudo apt install asterisk asterisk-sounds-en espeak-ng sox sip-tester tshark
sudo systemctl status asterisk
```

VirtualBox network adapter must be **Bridged Adapter**. Take a snapshot after a clean install.

## 2. Install the configuration

Find the VM address (`ip addr show`), then copy the files:

```bash
sudo cp ~/lab/pjsip.conf ~/lab/extensions.conf ~/lab/queues.conf ~/lab/voicemail.conf /etc/asterisk/
sudo chown asterisk:asterisk /etc/asterisk/{pjsip,extensions,queues,voicemail}.conf
sudo asterisk -rx "core reload"
sudo asterisk -rx "pjsip reload"
sudo asterisk -rx "queue reload all"
```

## 3. Generate the IVR recordings

```bash
espeak-ng -w /tmp/welcome.wav -s 135 \
  "Welcome to the VoIP call center. Press 1 for Sales, 2 for Technical Support, or 0 for the operator."
sox /tmp/welcome.wav -r 8000 -c 1 -b 16 /tmp/cc-welcome.wav
sudo cp /tmp/cc-welcome.wav /var/lib/asterisk/sounds/en/
sudo chown asterisk:asterisk /var/lib/asterisk/sounds/en/cc-welcome.wav
```

Repeat for `cc-you-are-next`, `cc-please-hold` and `cc-no-agent-available`.

Take a second snapshot here ("configured call center").

## 4. Linphone (Windows host)

| Account | Username | Password | Domain |
|---|---|---|---|
| Caller | 1000 | Secret1000! | VM IP (e.g. 192.168.1.50) |
| Agent 1 | 2001 | Secret2001! | VM IP |
| Agent 2 | 2002 | Secret2002! | VM IP |

Transport: UDP 5060, codec PCMU/ulaw. Verify with:

```bash
sudo asterisk -rx "pjsip show contacts"
sudo asterisk -rx "queue show"
```

## 5. Run the demo

1. Caller 1000 dials `500` → IVR welcome prompt.
2. Press `1` → sales queue (agents 2001 and 2002 ring with `ringall`).
3. Press `2` → support queue (agent 2002 only).
4. Agent answers → bridge; check `core show channels`.
5. Hang up → check `tail /var/log/asterisk/cdr-csv/Master.csv`.
6. Optional: agents dial `*89` to log out, then call again → timeout → voicemail
   (shorten `Queue()` timeout from 120 to 20 seconds for the demo).

## 6. Capture traffic

```bash
sudo tshark -i eth0 -w /tmp/callcenter.pcap \
  -f "port 5060 or (udp portrange 20000-30000)"
```

In Wireshark use the display filter `sip || rtp`.
Telephony → RTP Streams can play back the recorded call.

## 7. Generate load with SIPp

```bash
sipp -sn uac 192.168.1.50 -s 500 -au 1000 -ap 'Secret1000!' \
     -r 2 -rp 3000 -l 5 -m 10 -d 20000 -aa
```

While it runs: `queue show sales`. Afterwards: inspect the CDR file.
